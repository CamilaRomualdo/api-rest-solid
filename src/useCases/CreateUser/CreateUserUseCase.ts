import { IMailProvider } from './../../providers/IMailProvider';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/user';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const usersAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (usersAlreadyExists) {
            throw new Error("User already exists.")
        }

        const user = new User(data)

        await this.usersRepository.save(user)

        await this.mailProvider.sendEmail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'You Name',
                email: 'example@mail.com'
            },
            subject: 'Test Message',
            body: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`
        })
    }
}
import { Test, TestingModule } from '@nestjs/testing';
import { CreateClientUsecase } from 'src/core/clients/usecases/create-client.usecase'; // Ajuste o caminho conforme necessário
import { ClientRepository } from 'src/core/clients/repository/client.repository'; // Ajuste o caminho conforme necessário
import {
  CreateClientUsecaseInput,
  CreateClientUsecaseOutput,
} from 'src/core/clients/interfaces/create.client.usecase.interface'; // Ajuste o caminho conforme necessário

describe('CreateClientUsecase', () => {
  let usecase: CreateClientUsecase;
  let repository: ClientRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateClientUsecase,
        {
          provide: ClientRepository,
          useValue: {
            create: jest.fn(), // Mock da função create
          },
        },
      ],
    }).compile();

    usecase = module.get<CreateClientUsecase>(CreateClientUsecase);
    repository = module.get<ClientRepository>(ClientRepository);
  });

  it('should be defined', () => {
    expect(usecase).toBeDefined();
  });

  describe('execute', () => {
    it('should call repository.create with correct input and return the result', async () => {
      const input: CreateClientUsecaseInput = {
        fullName: 'Thales',
        contact: '4',
        address: 'Rua 25',
        userId: 1,
      };
      const output: CreateClientUsecaseOutput = {
        id: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...input,
      };

      jest.spyOn(repository, 'create').mockResolvedValue(output as any);

      const result = await usecase.execute(input);

      expect(repository.create).toHaveBeenCalledWith(input);
      expect(result).toEqual(output);
    });
  });
});

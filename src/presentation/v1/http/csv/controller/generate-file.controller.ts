import {
  Controller,
  Get,
  Header,
  Inject,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { json2csv } from 'json-2-csv';
import { Role } from 'src/presentation/enum/role.enum';
import { RolesGuard } from 'src/presentation/guard/roles.guard';
import { Roles } from 'src/presentation/roles.decorator';
import { createPipeQuery } from 'src/shared/utils/create-pipe';
import { GenerateFileDtoInput } from '../dto/generate-file.dto';
import { ApiTags } from '@nestjs/swagger';
import { GenerateFileApplication } from 'src/application/file/generate-file.application';

@Controller({
  path: 'files',
})
@ApiTags('file')
export class FileController {
  constructor(
    @Inject(GenerateFileApplication)
    private generateFileApplication: GenerateFileApplication,
  ) {}
  @Get()
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @UsePipes(createPipeQuery(GenerateFileDtoInput))
  @Header('Content-Type', 'text/csv;charset=utf-8')
  @Header('Content-Disposition', 'attachment; filename="package.csv"')
  async getFile(
    @Query()
    input: GenerateFileDtoInput,
  ): Promise<any> {
    const report = await this.generateFileApplication.execute(input);
    const csv = await json2csv(report, {
      delimiter: { field: ';', eol: '\n' },
    });
    console.log(csv);
    return `\uFEFF${csv}`;
  }
}

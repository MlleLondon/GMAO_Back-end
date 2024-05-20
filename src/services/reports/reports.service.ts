import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from 'src/entities/report/report.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ReportsService {

    constructor(@InjectRepository(Report) private reportRepository: Repository<Report>) {}

    async getReports(): Promise<Report[]> {
        return await this.reportRepository.find({
            order : {creationDate: 'DESC'},
        });
    }

    async getReportsByIsSigned(_isSigned : boolean): Promise<Report[]>{
        return await this.reportRepository.find({
            where: [
                {isSigned: _isSigned},
            ],
            order: {creationDate: 'DESC'},
        });
    }

    async getReportsByIsRefused(_isRefused : boolean): Promise<Report[]>{
        return await this.reportRepository.find({
            where: [
                {isRefused: _isRefused},
            ],
            order: {creationDate: 'DESC'},
        });
    }

    async getReportsBySearch(_search: string): Promise<Report[]> {
        return await this.reportRepository.find({
            where: [
                {title: Like(`%${_search}%`)},
                {refusedReason: Like(`%${_search}%`)},
            ],
            order: {creationDate: 'DESC'},
        });
    }

    async getReportById(_id: number): Promise<Report> {
        return await this.reportRepository.findOneBy({id: _id});
    }

    async createReport(report: Report){
        return await this.reportRepository.save(report);
    }

    async updateReport(report : Report){
        return await this.reportRepository.save(report);
    }

    async deleteReport(report : Report){
        return await this.reportRepository.delete(report);
    }
}

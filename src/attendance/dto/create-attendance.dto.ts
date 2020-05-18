export class CreateAttendanceDto {
  id: number;
  type: number;
  date: string;
  created_datetime: string;
  updated_datetime: string;
  studentId: number;
  remark: string;
}

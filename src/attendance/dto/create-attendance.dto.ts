export class CreateAttendanceDto {
  id: number;
  type: number;
  date: string;
  created_datetime: string;
  updated_datetime: string;
  student_id: number;
  remark: string;
}

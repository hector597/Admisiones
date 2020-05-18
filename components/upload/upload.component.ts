import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
uploadFiles: Array <File>;
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  onUpload(){
    let formData = new FormData();
    for (let i=0; i < this.uploadFiles.length; i++){
      formData.append('uploads[]', this.uploadFiles[i], this.uploadFiles[i].name);
    }
    //Llamar a nuestro services
    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log('Response:', res);
    });
  }

  onFileChange(e){
    this.uploadFiles = e.target.files;     
  }

}

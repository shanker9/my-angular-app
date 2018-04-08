import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Angular App';
  name = 'sunset';
  randomnames = '';
  ngOnInit() {
  }

  setNames() {
    var nameList = ['Jamal Boss', 'Margery Arend', 'Jamee Rosamond', 'Mellisa Boots', 'Don Wegner', 'Michal Mellish', 'Joi Kohn', 'Ron Tappan', 'Kory Thaler', 'Myron Theriault', 'Landon Hulet', 'Marylee Tuller', 'Maricela Swaby', 'Kathrin Lefebure', 'Tosha Dauphin', 'Quincy Nobile', 'Buena Chavous', 'Jadwiga Tomblin', 'Artie Ory', 'Maisha Naquin', 'Terrell Loughlin', 'Wendy Strachan', 'Dina Staley', 'Lizzie Trojan', 'Adalberto Tabler', 'Matilda Hudock', 'Veronica Fillion', 'Anton Luff', 'Ericka Cochran', 'Amparo Boster', 'Freida Connally', 'Mae Binney', 'Wanita Sutera', 'Rolland Bartel', 'Miki Tanouye', 'Sueann Revelle', 'Dannielle Zacharias', 'Sixta Crosland', 'Darnell Treece', 'Hyo Woodman', 'Alexis Savarese', 'Charita Machnik', 'Trena Whitwell', 'Emerald Stutts', 'Mckinley Grillo', 'Allen Bradfield', 'Chun Kwan', 'Ying Leiser', 'Jamika Bucy', 'Tena Schisler'];

    // setInterval(() => {
    //   this.randomnames = `${nameList[Math.floor(Math.random() * 50)]}`;
    // }, 1000)
  }
}

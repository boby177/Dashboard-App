import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IPost {
  id: string;
  author?: string;
  title?: string;
  category?: string;
  date?: string;
  // question mark or this symbol ? it means the data is optional to fill it
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  dataSource: MatTableDataSource<IPost>;
  posts: IPost[];
  column: string[] = ['id', 'author', 'title', 'category', 'date'];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() {
    this.posts = [
      {
        id: '1',
        author: 'Bob Bob',
        title: 'My first post',
        category: 'Uncategorized',
        date: '2022-08-11 14:42:00',
      },
      {
        id: '2',
        author: 'Asep Gun Gun',
        title: 'Amazing post',
        category: 'Technology',
        date: '2022-08-12 14:42:00',
      },
      {
        id: '3',
        author: 'Albert Bert',
        title: 'Golang is very difficult',
        category: 'Coding',
        date: '2022-08-13 14:42:00',
      },{
        id: '4',
        author: 'Dida Da Da',
        title: 'My vacation list',
        category: 'Holiday',
        date: '2022-08-11 14:42:00',
      },
      {
        id: '5',
        author: 'Novi Nov',
        title: 'Ruby on my rail',
        category: 'Code',
        date: '2022-08-12 14:42:00',
      },
      {
        id: '3',
        author: 'Bob Bob',
        title: 'My third post',
        category: 'Uncategorized',
        date: '2022-08-13 14:42:00',
      },{
        id: '1',
        author: 'Bob Bob',
        title: 'My first post',
        category: 'Uncategorized',
        date: '2022-08-11 14:42:00',
      },
      {
        id: '2',
        author: 'Bob Bob',
        title: 'My second post',
        category: 'Uncategorized',
        date: '2022-08-12 14:42:00',
      },
      {
        id: '3',
        author: 'Bob Bob',
        title: 'My third post',
        category: 'Uncategorized',
        date: '2022-08-13 14:42:00',
      },{
        id: '1',
        author: 'Bob Bob',
        title: 'My first post',
        category: 'Uncategorized',
        date: '2022-08-11 14:42:00',
      },
      {
        id: '2',
        author: 'Bob Bob',
        title: 'My second post',
        category: 'Uncategorized',
        date: '2022-08-12 14:42:00',
      },
      {
        id: '3',
        author: 'Bob Bob',
        title: 'My third post',
        category: 'Uncategorized',
        date: '2022-08-13 14:42:00',
      },{
        id: '1',
        author: 'Bob Bob',
        title: 'My first post',
        category: 'Uncategorized',
        date: '2022-08-11 14:42:00',
      },
      {
        id: '2',
        author: 'Bob Bob',
        title: 'My second post',
        category: 'Uncategorized',
        date: '2022-08-12 14:42:00',
      },
      {
        id: '3',
        author: 'Bob Bob',
        title: 'My third post',
        category: 'Uncategorized',
        date: '2022-08-13 14:42:00',
      },
    ];

    this.dataSource = new MatTableDataSource(this.posts);
    console.log(this.dataSource);
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value

    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

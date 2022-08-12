import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from '../posts.service';

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
  posts: IPost[] = []
  column: string[] = ['id', 'author', 'title', 'category', 'date', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.getPosts().then(response => {
      this.posts = response.data;
      
      this.dataSource = new MatTableDataSource(this.posts);
      console.log(this.dataSource.filteredData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.paginator.firstPage()
  }
}
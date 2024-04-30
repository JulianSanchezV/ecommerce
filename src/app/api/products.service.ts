import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from '@envs/environment.development';
import { Product } from '@shared/models/product.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductsService {

  private readonly _endPoint = environment.apiURL;

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this._endPoint}/products?sort=desc`).pipe(res => res);


  }

  public getProductById(id: number) {

  }


}

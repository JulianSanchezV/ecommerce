import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject } from '@angular/core';
import { environment } from '@envs/environment.development';
import { Product } from '@shared/models/product.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductsService {

  private readonly _endPoint = environment.apiURL;
  private readonly _http = inject(HttpClient);
  private readonly _injector = inject(EnvironmentInjector);

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this._endPoint}/products?sort=desc`).pipe(res => res);
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${this._endPoint}/products/${id}`);
  }
}










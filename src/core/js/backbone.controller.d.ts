/// <reference types="backbone" />

declare namespace Backbone {

  interface ControllerOptions<TModel extends Model = Model> {
    model?: TModel;
     // TODO: quickfix, this can't be fixed easy. The collection does not need to have the same model as the parent view.
    collection?: Backbone.Collection<any>; //was: Collection<TModel>;
    el?: any;
    events?: EventsHash;
    id?: string;
    className?: string;
    tagName?: string;
    attributes?: {[id: string]: any};
  }

  class Controller<TModel extends Model = Model> extends EventsMixin implements Events {

       /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
       public static extend(properties: any, classProperties?: any): any;

       /**
        * For use with views as ES classes. If you define a preinitialize
        * method, it will be invoked when the view is first created, before any
        * instantiation logic is run.
        * @see https://backbonejs.org/#View-preinitialize
        */
       preinitialize(options?: ControllerOptions<TModel>): void;

       constructor(options?: ControllerOptions<TModel>);
       initialize(options?: ControllerOptions<TModel>): void;

       $(selector: string): JQuery;
       model: TModel;
       collection: Collection<TModel>;

  }

}

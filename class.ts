namespace ns {
    export class test {
        public getValue(): string {
            let h = new helper();
            return h.getString();

            // return "test";
        }
    }
}
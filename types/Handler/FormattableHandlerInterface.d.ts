declare namespace Jymfony.Component.Logger.Handler {
    import FormatterInterface = Jymfony.Component.Logger.Formatter.FormatterInterface;

    export class FormattableHandlerInterface implements MixinInterface {
        public static readonly definition: Newable<FormattableHandlerInterface>;

        /**
         * Gets/sets the formatter.
         */
        public formatter: FormatterInterface;
    }
}

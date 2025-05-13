export type AuthStateChangedListener = (payload: {
    /**
     * The user ID.
     */
    uid: string,
}) => void;


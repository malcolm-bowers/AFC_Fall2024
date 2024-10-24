CREATE TABLE todo
(
    id           BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    note         VARCHAR(255),
    is_completed BOOLEAN,
    CONSTRAINT pk_todo PRIMARY KEY (id)
);
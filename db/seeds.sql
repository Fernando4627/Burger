use burger_db;
-- Insert rows into table 'burgers'
INSERT INTO burgers
    ( -- columns to insert data into
    [burger_name]
    )
VALUES
    ( -- first row: values for the columns in the list above
        "Turkey Bacon Sandwich"
),
    ( -- second row: values for the columns in the list above
        "Dirty Sanchez Burger"
),
    -- add more rows here
    ( -- third row: values for the columns in the list above
        "Chicken Bacon Sandwich"
)
GO
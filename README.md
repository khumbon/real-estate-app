## Getting Started

First navigate to the route folder, run json-server to use the listing data:
```bash
json-server db.json
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) to view the application.

Open [http://localhost:3000](http://localhost:3000) to view the listing data.


## Aims

I've endeavoured to use modular components throughout the app.
These reusable components can be designed to the highest standard and tested thoroughly.
These can ultimately be used throughout organisation.

I have also implemented jest and jest-axe tests for each component.
Accessible components are a requirement, not a nice-to-have.
My lighthouse assessment, thankfully, shows a high accessibility score.

Basic screen size responsiveness has been integrated.

I have attempted to limit the time spent on this assignment and have outlined
what I would have preferred to include below:

## Future Improvements

- [ ] Add cypress integration tests
- [ ] Expand unit tests
- [ ] Improve app performance (Lighthouse screenshot below)
- [ ] Improve app responsiveness
- [ ] Add a status banner for active and expired listings


![Lighthouse](/lighthouse.png "Lighthouse")

# Real estate front-end challenge

Create a simple front-end application that will enable estate agents to manage property listings.

An agent should be able to do the following:

- View a list of properties for sale
- Mark an individual property listing as expired
- See which properties are `active` and which have been `expired`.

We have no requirements on the user experience or look and feel so we welcome you to do what you think is best based off the following criteria.

A property listing should contain the following information:

- Image of property
- Number of bedrooms
- Address (including postcode)
- Asking price
- Status - `active` or `expired`

Fixed 248px left sidebar with nested collapsible items; active = primary-subtle fill.
```jsx
<SideNav items={[{id:'dash',label:'Dashboard',icon:<i data-lucide="layout-dashboard"/>},{id:'workouts',label:'Workouts',children:[{id:'logs',label:'Logs'}]}]} activeId="dash" onSelect={go} />
```
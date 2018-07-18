Basic button:

### Button Usage

Different type.
```
<div className="demos">
  <Button onClick={() => console.log(1)}>确定</Button>
  <Button icon="plus" type="primary">确定</Button>
  <Button type="warn">确认删除</Button>
</div>
```

Different size.
```
<div className="demos">
  <Button size="large">large button</Button>
  <Button size="default">default button</Button>
  <Button size="small">light button</Button>
</div>
```
Disabled Button.
```
<div className="demos">
  <Button disabled>default button</Button>
  <Button disabled type="primary">primary button</Button>
  <Button loading disabled type="light">light button</Button>
  <Button disabled type="link">link button&gt;</Button>
</div>
```
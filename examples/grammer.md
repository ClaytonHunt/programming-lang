\<identifier>
First character is a letter, any proceeding characters are letters or numbers.

\<type>
A primitive type: string, int, boolean, etc.

\<value>
Either an identifier ()for a variable) or a literal (1, "hello", true)

Class Declaration:
```
class <identifier>
```

Method Declaration:
```
method <identifier> requires([<type> <identifier:name>...]) returns <type>
```

Variable Declaration:
```
var <type> <identifier:name> [= <value>]
```

Method Invocation:
```
<identifier:name>([<value>...])
```

Print statement:
```
print <value>
```

Return Statement:
```
return <value>
```
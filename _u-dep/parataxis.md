---
layout: base
title: 'parataxis'
shortdef: 'parataxis'
---

## `{{ page.title }}`: {{ page.shortdef }}

The parataxis relation (from Greek for "place side by side") is a
relation between the main verb of a clause and other sentential
elements, such as a sentential parenthetical, a clause after a “:” or
a “;”, or two sentences placed side by side without any explicit
coordination or subordination.

~~~ sdparse
Let 's face it we 're annoyed
parataxis(Let, annoyed)
~~~

~~~ sdparse
The guy , John said , left early in the morning
parataxis(left, said)
~~~

Note that for this latter example, there are paraphrases that convey
essentially the same meaning, nevertheless we do not treat them as
syntactically equivalent. One of them is a subordinate clause with
reported speech: in this case, the subordinate clause must depend
on _John said_ as its [ccomp]().
In other cases, including direct speech,
we suggest to reverse the dependency and label it `parataxis`.

~~~ sdparse
John said that the guy left early in the morning .
ccomp(said, left)
~~~

~~~ sdparse
John said the guy left early in the morning .
ccomp(said, left)
~~~

~~~ sdparse
John said : “ The guy left early in the morning . ”
parataxis(left, said)
~~~

~~~ sdparse
“ The guy left early in the morning ” , John said .
parataxis(left, said)
~~~

~~~ sdparse
The guy left early in the morning , John said .
parataxis(left, said)
~~~

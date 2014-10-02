---
layout: entry
title: 'parataxis'
shortdef: 'parataxis'
---

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

### Treatment of reported speech

For the reported speech example above, there are paraphrases that convey
essentially the same meaning where we would treat the reported content as the [ccomp]() of the speech verb. Nevertheless, when the speech verb is medial or final, we treat the reported content as the main clause and treat the speech verb as a parenthetical, linked to the main clause as `parataxis`.
This analysis is not completely uncontroversial, but follows many authorities, such as Huddleston and Pullum (2002), _The Cambridge Grammar of the English Language_ (see chapter 11, section 9). Looking at English, when the speech verb is first, regardless of whether the reported content is introduced with an explicit mark like _that_ or separated off by a comma colon or nothing, the result behaves as a single clause, with the reported content being embedded. In contrast, when the speech verb is medial or final, the reported content behaves as the head, and the speech verb behaves as a matrix level parenthetical giving the analyses below.

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
ccomp(said, left)
~~~

~~~ sdparse
“ The guy left early in the morning ” , John said .
parataxis(left, said)
~~~

~~~ sdparse
The guy left early in the morning , John said .
parataxis(left, said)
~~~

~~~ sdparse
The guy , he said , left early in the morning .
parataxis(left, said)
~~~

An argument for this analysis is that in the cases analyzed as embedding, the entire clause can be further embedded (_I was taken aback when John said the guy left early in the morning._), while this is not possible with medial or final placement of the speech verb (_*I was taken aback when the guy left early this morning, John said._).

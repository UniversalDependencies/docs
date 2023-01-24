---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause. 
The adverbial clauses have their own verb and subject.

A conditional adverbial clause in Malayalam has a finite verb suffixed with _-eṅkil_ or _-āl_ "if" as the dependent.  
~~~ sdparse
രാഷ്ട്രപതി അംഗീകരിച്ചില്ലെങ്കിൽ സുപ്രീം കോടതിയെ സമീപിക്കാന ഉം തീരുമാനം . \n The President agree-does-not-if the Supreme Court to approach-too decision .
nsubj(അംഗീകരിച്ചില്ലെങ്കിൽ, രാഷ്ട്രപതി)
advcl(തീരുമാനം, അംഗീകരിച്ചില്ലെങ്കിൽ)
advcl(decision, agree-does-not-if)
nmod(കോടതിയെ, സുപ്രീം)
obj(സമീപിക്കാന, കോടതിയെ)
xcomp(തീരുമാനം, സമീപിക്കാന)
advmod(സമീപിക്കാന, ഉം)
punct(തീരുമാനം, .)
~~~
A nominalized verb form is the dependent for a manner adverbial clause.
~~~ sdparse
ഈ ആളെ പോക്‌സോ കേസ് ചുമത്തി ആണ് പോലീസ് അറസ്റ്റു ചെയ്തത് . \n This man POCSO case imposed is police arrest did .
det(ആളെ, ഈ)
obj(ചെയ്തത്, ആളെ)
compound(കേസ്, പോക്‌സോ)
obj(ചുമത്തി, കേസ്)
advcl(ചെയ്തത്, ചുമത്തി)
advcl(did, imposed)
cop:emph(ചുമത്തി, ആണ്)
nsubj(ചെയ്തത്, പോലീസ്)
compound(ചെയ്തത്, അറസ്റ്റു)
punct(ചെയ്തത്, .)
~~~
For a consequence adverbial clause a nominalized verb form with the suffix _-āl_ "because" is the dependent. In other cases,
the postposition കൊണ്ട് _koṇṭ_ can be found. 
~~~sdparse
അവൻ വളരെ വേഗത്തിൽ ഓടിയതിനാൽ എനിക്ക് പിടിച്ചുനിൽക്കാൻ കഴിഞ്ഞില്ല . \n He very fast-in ran-because me to-hold-on could-not .
nsubj(ഓടിയതിനാൽ, അവൻ)
advmod(വേഗത്തിൽ, വളരെ)
advmod(ഓടിയതിനാൽ, വേഗത്തിൽ)
advcl(പിടിച്ചുനിൽക്കാൻ, ഓടിയതിനാൽ)
advcl(to-hold-on, ran-because) 
nsubj(പിടിച്ചുനിൽക്കാൻ, എനിക്ക്)
aux(പിടിച്ചുനിൽക്കാൻ, കഴിഞ്ഞില്ല)
punct(പിടിച്ചുനിൽക്കാൻ, .)
~~~

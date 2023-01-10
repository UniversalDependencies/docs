---
layout: relation
title: 'compound:svc'
shortdef: 'serial verb construction'
udver: '2'
---

Serial verb constructions are the succession of verbs and their
(shared) complements having one subject and a finite tense on the 
last verb of the sequence. The verbs in these constructions are
not separated by any overt marker of coordination or subordination.

In most of the cases, the verbs are lexicalized and cannot be separated
by any intervening material. The final verb is finite and the preceeding verbs 
are non-finite and resemble the past participle forms. 

~~~sdparse
ഇന്ത്യയിൽ ഉം കഞ്ചാവ് നിയമവിധേയമാക്കണം എന്ന വാദങ്ങൾ ഉയർന്നു വരുന്നുണ്ട് . \n India-in-also cannabis legalize-should that arguments increased came .
obl(നിയമവിധേയമാക്കണം, ഇന്ത്യയിൽ)
advmod:emph(ഇന്ത്യയിൽ, ഉം)
nsubj(നിയമവിധേയമാക്കണം, കഞ്ചാവ്)
acl:relcl(വാദങ്ങൾ, നിയമവിധേയമാക്കണം)
mark(നിയമവിധേയമാക്കണം, എന്ന)
nsubj(വരുന്നുണ്ട്, വാദങ്ങൾ)
compound:svc(വരുന്നുണ്ട്, ഉയർന്നു)
compound:svc(came, increased)
punct(വരുന്നുണ്ട്, .)
~~~
'Arguments to legalize cannabis are also emerging in India.'

In the above mentioned example, the series of the verbs 'to increase' and 'to come'
have been lexicalized together to form the meaning 'to emerge'. 

---
layout: relation
title: 'compound:svc'
shortdef: 'serial verb construction'
udver: '2'
---

Serial verb constructions are the succession of verbs and their
(shared) complements. The verbs in these constructions are
not separated by any overt marker of coordination or subordination.

In most of the cases, the verbs are lexicalized and cannot be separated
by any intervening material. The final verb is usually finite and the preceeding verbs 
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

The serial verb (V1) is the verb of a non-finite adverbial clausal adjunct in contrast to the popular 
belief that serial verb constructions are monoclausal. 
If the preceeding verb or V1 has an aspectual marking, then it licenses
a lexical subject and in other cases only a PRO subject is possible. 

~~~sdparse
സമൂഹത്തിൽ മാന്യത നിലനിർത്തി പ്രൊഫഷണൽ വൈദഗ്ധ്യത്തോടെ മനസ്സാന്നിധ്യം കൈവിടാതെ ആണ് ഓരോ കൊലപാതകം ഉം നടത്തിയത് . \n society-in dignity 
maintained professional skill-with sanity leave-without is every murder-also carried out .
obl(നിലനിർത്തി, സമൂഹത്തിൽ)
obj(നിലനിർത്തി, മാന്യത)
compound:svc(കൈവിടാതെ, നിലനിർത്തി)
compound:svc(leave-without, maintained)
amod(വൈദഗ്ധ്യത്തോടെ, പ്രൊഫഷണൽ)
obl(കൈവിടാതെ, വൈദഗ്ധ്യത്തോടെ)
obj(കൈവിടാതെ, മനസ്സാന്നിധ്യം)
advcl(നടത്തിയത്, കൈവിടാതെ)
cop(കൈവിടാതെ, ആണ്)
det(കൊലപാതകം, ഓരോ)
obj(നടത്തിയത്, കൊലപാതകം)
advmod:emph(കൊലപാതകം, ഉം)
punct(നടത്തിയത്, .)
~~~
'Each murder was carried out with professional skill and sanity while maintaining dignity in society.'

In some cases we also find that the second or in this case the final verb is a nominalized verb form. 
~~~sdparse
ഈ ആളെ പോക്‌സോ കേസ് ചുമത്തി ആണ് പോലീസ് അറസ്റ്റു ചെയ്തത് . \n this man POCSO case imposed-is police arrest did .
det(ആളെ, ഈ)
obj(ചെയ്തത്, ആളെ)
compound(കേസ്, പോക്‌സോ)
obj(ചുമത്തി, കേസ്)
compound:svc(ചെയ്തത്, ചുമത്തി)
compound:svc(did, imposed)
cop:emph(ചുമത്തി, ആണ്)
nsubj(ചെയ്തത്, പോലീസ്)
compound(ചെയ്തത്, അറസ്റ്റു)
punct(ചെയ്തത്, .)
~~~
'He was arrested by the police on a POCSO case.'

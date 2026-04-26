---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb. In Middle Armenian, the `obl` relation is specified either by bare case forms or by case forms in conjunction with adposition(s). 

~~~ sdparse
երեք հետ պատեհ է որ ձենել տայ՝ թէ եկէք ի հնազանդութիւն. թէ գան, նա զամէնն հնազանդութեամբ բերէ եւ չտայ սպաննել \n erek’ het pateh ē or jenel tay՝ t’ē ekēk’ i hnazandowt’iwn. t’ē gan, na zamēnn hnazandowt’eamb berē ew čtay spannel . \n It is fitting to have it announced three times: 'Come into submission.' If they come, then he shall bring them all into obedience and shall not allow them to be killed .
obl(ձենել, հետ)
obl(announced, times)
obl(եկէք, հնազանդութիւն)
obl(Come, submission)
case(submission, into)
obl(բերէ, հնազանդութեամբ)
obl(bring, obedience)
~~~

~~~ sdparse
զգանկտվորացն `Dat` դարպաս բռնէ \n zganktvorac’n darpas bṙnē \n He convenes a court for complainants
iobj(բռնէ, գանկտվորացն)
iobj(convenes, complainants)
~~~

~~~ sdparse
Եւ թէ ոք զքրիստոնէ տուրտվել լինի ի թուրք՝ մեռնի. կամ խրատվի ի յաչսն կամ յերկու ձեռսն եւ ապաշխարէ ։ \n Ew t’ē ok’ zk’ristonē towrtvel lini i t’owrk’՝ meṙni. kam xratvi i yačsn kam yerkow jeṙsn ew apašxarē ։ \n And if anyone betrays a Christian to the Turks, he shall die; or he shall be punished [mutilated] in his eyes or in both his hands, and he shall do penance.
obl(տուրտվել, թուրք)
case(թուրք, ի)
obl(խրատվի, աչսն)
case(աչսն, ի)
~~~

We use [obl:agent]() for the agent of a passive verbs.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:22 CET -->

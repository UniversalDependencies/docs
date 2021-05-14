---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

The passive auxiliary is limited to the particle 被 _bèi_ in the "short passive" construction, where the agent is not mentioned. 

~~~ conllu
# visual-style 3 2 aux:pass	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	他	_	PRON	_	_	3	nsubj:pass	_	3SG.M
2	被	_	AUX	_	_	3	aux:pass	_	PASS
3	抓	_	VERB	_	_	0	root	_	catch

1	"He	_	_	_	_	0	_	_	_
2	was	_	_	_	_	0	_	_	_
3	caught."	_	_	_	_	0	_	_	_

~~~

"Long passive" constructions where 被 _bèi_ is followed by a noun expressing the agent are considered adpositional phrases, in which case the relation [obl:agent]() is used and 被 _bèi_ is annotated as a [case]() dependent with an [ADP]() tag. Etymologically, the two passive constructions appear to have likely followed different grammaticalization paths, hence the different treatments in the tagging and annotation of the two.

<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->

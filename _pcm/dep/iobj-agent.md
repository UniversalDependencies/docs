---
layout: relation
title: 'iobj:agent'
shortdef: 'agentive indirect object'
udver: '2'
---

Used almost exclusively for the complement of the construction "no matter".


~~~ conllu
# visual-style 2 6 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white

1	and	and	CCONJ	_	_	3	discourse	_	_
2	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	win	win	VERB	_	_	0	root	_	_
4	//=	//=	X	_	_	7	dep	_	_
5	#	#	X	_	_	7	dep	_	_
6	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	achieve	achieve	VERB	_	_	3	parataxis:conj	_	_
8	>	>	X	_	_	11	dep	_	_
9	#	#	X	_	_	11	dep	_	_
10	no	no	AUX	_	Polarity=Neg	11	aux	_	_
11	matter	matter	VERB	_	_	7	advcl	_	_
12	di	di	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	circumstance	circumstance	NOUN	_	_	11	iobj:agent	_	_
14	wey	wey	SCONJ	_	_	16	mark	_	_
15	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	16	nsubj	_	_
16	see	see	VERB	_	_	13	acl:relcl	_	_
17	oursef	oursef	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes	16	obj	_	_
18	//	//	X	_	_	3	dep	_	_

1	and	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	win	_	_	_	_	0	_	_	_
4	//=	_	_	_	_	0	_	_	_
5	#	_	_	_	_	0	_	_	_
6	we	_	_	_	_	0	_	_	_
7	achieve	_	_	_	_	0	_	_	_
8	>	_	_	_	_	0	_	_	_
9	#	_	_	_	_	0	_	_	_
10	no	_	_	_	_	0	_	_	_
11	matter	_	_	_	_	0	_	_	_
12	the	_	_	_	_	0	_	_	_
13	circumstance	_	_	_	_	0	_	_	_
14	that	_	_	_	_	0	_	_	_
15	we	_	_	_	_	0	_	_	_
16	see	_	_	_	_	0	_	_	_
17	ourself	_	_	_	_	0	_	_	_
18	//	_	_	_	_	0	_	_	_

1	and	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	win	_	_	_	_	0	_	_	_
4	//=	_	_	_	_	0	_	_	_
5	#	_	_	_	_	0	_	_	_
6	we	_	_	_	_	0	_	_	_
7	achieve	_	_	_	_	0	_	_	_
8	>	_	_	_	_	0	_	_	_
9	#	_	_	_	_	0	_	_	_
10	no	_	_	_	_	0	_	_	_
11	matter	_	_	_	_	0	_	_	_
12	the	_	_	_	_	0	_	_	_
13	circumstances	_	_	_	_	0	_	_	_
14	that	_	_	_	_	0	_	_	_
15	we	_	_	_	_	0	_	_	_
16	see	_	_	_	_	0	_	_	_
17	ourselves	_	_	_	_	0	_	_	_
18	in	_	_	_	_	0	_	_	_
19	in	_	_	_	_	0	_	_	_

~~~

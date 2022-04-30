---
layout: relation
title: 'nmod:poss'
shortdef: 'possessive nominal modifier'
udver: '2'
---

The `nmod:poss` relation is used between a nominal phrase and its possessive determiner. In Bamana, there are several types of possessive constructions. Inalienable possession is expressed by juxtaposition of two noun phrases.

~~~ conllu
# visual-style 7 6 nmod:poss	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	mògò	mɔ̀gɔ	NOUN	_	_	4	nsubj	_	_
2	si	sí	DET	_	_	1	det	_	_
3	ma	ma	AUX	_	_	4	aux	_	_
4	se	sé	VERB	_	_	0	root	_	_
5	ka	kà	AUX	_	_	8	aux	_	_
6	den	dén	NOUN	_	_	7	nmod:poss	_	_
7	tògò	tɔ́gɔ	NOUN	_	_	8	obj	_	_
8	fò	fɔ́	VERB	_	_	4	xcomp	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~

'No one could say the child's name'.


Alienable possession is marked by a postposition _ká_ which follows a dependent noun.

~~~ conllu
# visual-style 5 3 nmod:poss	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	a	à	PRON	_	_	2	nsubj	_	_
2	sera	sera	VERB	_	_	0	root	_	_
3	u	ù	PRON	_	_	5	nmod:poss	_	_
4	ka	ka	ADP	_	_	3	case	_	_
5	du	dú	NOUN	_	_	2	obl	_	_
6	kònò	kɔ́nɔ	ADP	_	_	5	case	_	_
7	.	.	PUNCT	_	_	2	punct	_	_

~~~

'They came to their house'.
<!-- Interlanguage links updated St lis 3 20:58:59 CET 2021 -->

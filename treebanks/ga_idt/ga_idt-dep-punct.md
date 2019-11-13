---
layout: base
title:  'Statistics of punct in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `punct`

This relation is universal.

4362 nodes (11%) are attached to their parents as `punct`.

2317 instances of `punct` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.0430994956442.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (1772; 41% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (1282; 29% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (243; 6% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (235; 5% instances), <tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (163; 4% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (129; 3% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (111; 3% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (98; 2% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (96; 2% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (89; 2% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (56; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (45; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), <tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 punct	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Dona	dona	ADJ	Adj	Degree=Pos	8	ccomp	_	_
3	go	go	ADV	Gn	_	2	advmod	_	_
4	leor	leor	ADJ	Adj	_	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
6	'	'	PUNCT	Punct	_	2	punct	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
9	Tom	Tom	NOUN	Noun	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Bean	bean	NOUN	Noun	Gender=Fem|Number=Sing	0	root	_	_
2	shuidhte	suidhte	ADJ	Adj	Form=Len|VerbForm=Part	1	amod	_	_
3	dhéanta	déanta	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	SpaceAfter=No
4	...	...	PUNCT	...	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 punct	color:blue
1	Glas	Glas	PROPN	Noun	Gender=Masc|Number=Sing	0	root	_	_
2	a	a	PART	Vb	PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	bhíonn	bí	VERB	PresImp	Form=Len	1	csubj:cleft	_	_
4	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	caora	caor	NOUN	Noun	Definite=Def|Gender=Fem|Number=Plur	3	nsubj	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	dtús	tús	NOUN	Noun	Form=Ecl|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~



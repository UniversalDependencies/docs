---
layout: base
title:  'Statistics of punct in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `punct`

This relation is universal.

11173 nodes (10%) are attached to their parents as `punct`.

6045 instances of `punct` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2088069453146.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (4948; 44% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (3564; 32% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (737; 7% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (559; 5% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (287; 3% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (225; 2% instances), <tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (193; 2% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (169; 2% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (136; 1% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (130; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (81; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (44; 0% instances), <tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (34; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (28; 0% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (22; 0% instances), <tt><a href="ga_idt-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 punct	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Dona	dona	ADJ	Adj	Degree=Pos	8	parataxis	_	_
3	go	go	ADV	Gn	_	2	advmod	_	_
4	leor	leor	ADJ	Adj	_	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
6	'	'	PUNCT	Punct	_	2	punct	_	_
7	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
9	Tom	Tom	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Bean	bean	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	shuidhte	suidhte	ADJ	Adj	Form=Len|VerbForm=Part	1	amod	_	_
3	dhéanta	déanta	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	SpaceAfter=No
4	...	...	PUNCT	...	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 punct	color:blue
1	Dé	Dé	PROPN	Subst	Definite=Def|Number=Sing	0	root	_	NamedEntity=Yes
2	Céadaoin	Céadaoin	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	NamedEntity=Yes|SpaceAfter=No
3	,	,	PUNCT	Punct	_	4	punct	_	_
4	28	28	NUM	Num	_	1	nmod	_	NamedEntity=Yes
5	Bealtaine	Bealtaine	PROPN	Noun	Definite=Def|Gender=Fem|Number=Sing	4	flat	_	NamedEntity=Yes
6	1986	1986	NUM	Num	_	4	flat	_	NamedEntity=Yes|SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~



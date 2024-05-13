---
layout: base
title:  'Statistics of case in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `case`

This relation is universal.

318 nodes (2%) are attached to their parents as `case`.

279 instances of `case` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5314465408805.

The following 5 pairs of parts of speech are connected with `case`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADP.html">ADP</a></tt> (209; 66% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-ADP.html">ADP</a></tt> (63; 20% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADP.html">ADP</a></tt> (39; 12% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	5000	5000	NUM	_	NumType=Card	2	nummod	2:nummod	_
2	dollaria	dollari	NOUN	_	Case=Par|Number=Sing	7	nsubj:cop	7:nsubj:cop	_
3	henkeä	henki	NOUN	_	Case=Par|Number=Sing	2	nmod	2:nmod	_
4	kohden	kohden	ADP	_	AdpType=Post	3	case	3:case	_
5	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	sallittu	sallittu	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	maksimimäärä	maksimi#määrä	NOUN	_	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Kaikki	kaikki	PRON	_	Case=Nom|Number=Sing|PronType=Ind	2	det	2:det	_
2	lääkintämiehet	lääkintä#mies	NOUN	_	Case=Nom|Number=Plur	4	nsubj:cop	4:nsubj:cop	_
3	olivat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	aseistettuja	aseistaa	VERB	_	Case=Par|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	paitsi	paitsi	ADP	_	AdpType=Prep	7	case	7:case	_
7	minä	minä	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	conj	4:conj	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Kolmantena	kolmas	ADJ	_	Case=Ess|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	päivänä	päivä	NOUN	_	Case=Ess|Number=Sing	4	obl	4:obl	_
3	olin	olla	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	palannut	palata	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	EMicron	EMicro	PROPN	_	Case=Gen|Number=Sing	4	obl	4:obl	_
6	pariin	pariin	ADP	_	AdpType=Post	5	case	5:case	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~



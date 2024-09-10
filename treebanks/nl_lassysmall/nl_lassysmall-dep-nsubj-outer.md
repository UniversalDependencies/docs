---
layout: base
title:  'Statistics of nsubj:outer in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="nl_lassysmall-dep-nsubj-pass.html">nsubj:pass</a></tt>.

13 nodes (0%) are attached to their parents as `nsubj:outer`.

8 instances of `nsubj:outer` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.53846153846154.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (5; 38% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (3; 23% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (2; 15% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 nsubj:outer	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	beelden	beeld	NOUN	N|soort|mv|basis	Number=Plur	12	nsubj:outer	12:nsubj:outer	_
3	in	in	ADP	VZ|init	_	5	case	5:case	_
4	een	een	DET	LID|onbep|stan|agr	Definite=Ind	5	det	5:det	_
5	film	film	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nmod	2:nmod:in	_
6	zijn	zijn	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
7	wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	12	obj	12:obj	_
8	woorden	woord	NOUN	N|soort|mv|basis	Number=Plur	12	nsubj	12:nsubj	_
9	voor	voor	ADP	VZ|init	_	11	case	11:case	_
10	een	een	DET	LID|onbep|stan|agr	Definite=Ind	11	det	11:det	_
11	gedicht	gedicht	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	12	obl	12:obl:voor	_
12	betekent	betekenen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
13	,	,	PUNCT	LET	_	14	punct	14:punct	_
14	zei	zeggen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	12	parataxis	12:parataxis	_
15	Ditvoorst	Ditvoorst	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	14	nsubj	14:nsubj	SpaceAfter=No
16	.	.	PUNCT	LET	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Dat	dat	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	6	nsubj:outer	6:nsubj:outer	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
3	wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	7	obj	7:obj	_
4	het	het	DET	LID|bep|stan|evon	Definite=Def	5	det	5:det	_
5	publiek	publiek	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	nsubj	6:nsubj|7:nsubj:xsubj	_
6	wil	willen	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	zien	zien	VERB	WW|inf|vrij|zonder	VerbForm=Inf	6	xcomp	6:xcomp	SpaceAfter=No
8	!	!	PUNCT	LET	_	6	punct	6:punct	_
9	"	"	PUNCT	LET	_	6	punct	6:punct	SpaceAfter=No
10	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:outer	color:blue
1	Maar	maar	CCONJ	VG|neven	_	3	mark	3:mark	_
2	ondertussen	ondertussen	ADV	BW	_	3	advmod	3:advmod	_
3	doet	doen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	Bernini	Bernini	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj:outer	3:nsubj:outer	_
5	alsof	alsof	SCONJ	VG|onder	_	8	mark	8:mark	_
6	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	8	nsubj	8:nsubj	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	architect	architect	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	xcomp	3:xcomp	_
9	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	8	cop	8:cop	SpaceAfter=No
10	.	.	PUNCT	LET	_	3	punct	3:punct	_
11	"	"	PUNCT	LET	_	3	punct	3:punct	_

~~~



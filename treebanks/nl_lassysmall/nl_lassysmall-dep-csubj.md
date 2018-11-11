---
layout: base
title:  'Statistics of csubj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj`

This relation is universal.

54 nodes (0%) are attached to their parents as `csubj`.

53 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.59259259259259.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (18; 33% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (15; 28% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (10; 19% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 csubj	color:blue
1	Uit	uit	ADP	VZ|init	_	3	case	3:case	_
2	genetisch	genetisch	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	3	amod	3:amod	_
3	onderzoek	onderzoek	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	4:obl:uit	_
4	blijkt	blijken	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	echter	echter	ADV	BW	_	4	advmod	4:advmod	_
6	dat	dat	SCONJ	VG|onder	_	11	mark	11:mark	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	9	det	9:det	_
8	huidige	huidig	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	9	amod	9:amod	_
9	Belgen	Belg	PROPN	N|eigen|mv|basis	Number=Plur	11	nsubj	11:nsubj	_
10	niet	niet	ADV	BW	_	11	advmod	11:advmod	_
11	afstammen	afstammen	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	4	csubj	4:csubj	_
12	van	van	ADP	VZ|init	_	14	case	14:case	_
13	de	de	DET	LID|bep|stan|rest	Definite=Def	14	det	14:det	_
14	Belgae	Belga	PROPN	N|eigen|mv|basis	Number=Plur	11	obl	11:obl:van	SpaceAfter=No
15	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 18 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	5	expl	5:expl	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	5:det	_
4	eerste	één	ADJ	TW|rang|prenom|stan	_	5	amod	5:amod	_
5	keer	keer	NOUN	N|soort|ev|basis|genus|stan	Gender=Com,Neut|Number=Sing	0	root	0:root	_
6	dat	dat	SCONJ	VG|onder	_	18	mark	18:mark	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	winnares	winnares	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	18	nsubj	18:nsubj	_
9	van	van	ADP	VZ|init	_	10	case	10:case	_
10	Roland	Roland	PROPN	SPEC|deeleigen	_	8	nmod	8:nmod:van	_
11	Garros	Garros	PROPN	SPEC|deeleigen	_	10	flat	10:flat	_
12	in	in	ADP	VZ|init	_	15	case	15:case	_
13	de	de	DET	LID|bep|stan|rest	Definite=Def	15	det	15:det	_
14	eerste	één	ADJ	TW|rang|prenom|stan	_	15	amod	15:amod	_
15	rond	ronde	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	18	obl	18:obl:in	_
16	van	van	ADP	VZ|init	_	17	case	17:case	_
17	Wimbledon	Wimbledon	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	15	nmod	15:nmod:van	_
18	verloor	verliezen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	csubj	5:csubj	SpaceAfter=No
19	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj	color:blue
1	Wanneer	wanneer	ADV	BW	_	6	advmod	6:advmod	_
2	ze	ze	PRON	VNW|pers|pron|stan|red|3|ev|fem	Person=3|PronType=Prs	6	nsubj	6:nsubj	_
3	Leopold	Leopold	PROPN	SPEC|deeleigen	_	6	obj	6:obj	_
4	III	III	PROPN	SPEC|deeleigen	_	3	flat	3:flat	_
5	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	ontmoet	ontmoeten	VERB	WW|vd|vrij|zonder	VerbForm=Part	10	csubj	10:csubj	SpaceAfter=No
7	,	,	PUNCT	LET	_	6	punct	6:punct	_
8	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
9	niet	niet	ADV	BW	_	10	advmod	10:advmod	_
10	bekend	bekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~



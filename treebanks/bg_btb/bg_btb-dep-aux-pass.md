---
layout: base
title:  'Statistics of aux:pass in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="bg_btb-dep-aux.html">aux</a></tt>.

930 nodes (1%) are attached to their parents as `aux:pass`.

889 instances of `aux:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09139784946237.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (904; 97% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (24; 3% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Село	село	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	Драгалевци	драгалевци	PROPN	Np-li	Definite=Ind|Number=Ptan	1	nmod	1:nmod	_
3	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	разположено	разположа-(се)	VERB	Vpptcv--sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	R	_	6	case	6:case	_
6	полите	пола	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	4	iobj	4:iobj	_
7	на	на	ADP	R	_	8	case	8:case	_
8	Витоша	витоша	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	6	nmod	6:nmod:на	SpaceAfter=No
9	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	Дончо	дончо	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	беше	съм	VERB	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
3	дълбоко	дълбоко	ADV	Dm	Degree=Pos	4	advmod	4:advmod	_
4	вдаден	вдам	ADJ	Vpptcv--smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	R	_	6	case	6:case	_
6	работата	работа	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	4	iobj	4:iobj	_
7	си	свой	PRON	Psxto	Case=Nom|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	6:det	SpaceAfter=No
8	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 aux:pass	color:blue
1	Но	но	CCONJ	Cc	_	2	cc	2:cc	_
2	ето	ето	PART	Tv	_	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	punct	_	6	punct	6:punct	_
4	те	аз	PRON	Ppe-op3	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	_
5	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	6	expl	6:expl	_
6	решават	решавам-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
7	на	на	ADP	R	_	9	case	9:case	_
8	безпрецедентен	безпрецедентен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	ход	ход	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	6	obl	6:obl:на	_
10	и	и	CCONJ	Cp	_	20	cc	20:cc	_
11	София	софия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	20	nsubj:pass	20:nsubj:pass|22:nsubj|25:nsubj	SpaceAfter=No
12	,	,	PUNCT	punct	_	15	punct	15:punct	_
13	макар	макар	ADP	R	_	15	case	15:case	_
14	за	за	ADP	R	_	15	case	15:case	_
15	дни	ден	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	20	obl	20:obl:макар	SpaceAfter=No
16	,	,	PUNCT	punct	_	15	punct	15:punct	_
17	ще	ще	AUX	Tx	_	20	aux:pass	20:aux:pass	_
18	бъде	бъда	VERB	Vyptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux:pass	20:aux:pass	_
19	идеално	идеално	ADV	Dm	Degree=Pos	20	advmod	20:advmod	_
20	почистена	почистя	ADJ	Vpptcv--sfi	Aspect=Perf|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	conj	6:conj	_
21	и	и	CCONJ	Cp	_	22	cc	22:cc	_
22	може	мога	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	conj	20:conj	_
23	и	и	CCONJ	Cp	_	25	cc	25:cc	_
24	да	да	AUX	Tx	_	25	aux	25:aux	_
25	заприлича	заприличам	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	xcomp	22:xcomp	_
26	на	на	ADP	R	_	28	case	28:case	_
27	европейска	европейски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	28	amod	28:amod	_
28	столица	столица	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	25	iobj	25:iobj	SpaceAfter=No
29	.	.	PUNCT	punct	_	2	punct	2:punct	_

~~~



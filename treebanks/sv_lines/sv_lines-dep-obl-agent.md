---
layout: base
title:  'Statistics of obl:agent in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-obl.html">obl</a></tt>.

71 nodes (0%) are attached to their parents as `obl:agent`.

69 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.98591549295775.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (53; 75% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (11; 15% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (4; 6% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Mat	mat	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj:pass	_	_
2	tillreddes	tillreda	VERB	PAST-PASS	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	av	av	ADP	_	_	5	case	_	_
4	många	mången	ADJ	POS-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	5	amod	_	_
5	händer	hand	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obl:agent	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	Han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	hävdar	hävda	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	att	att	SCONJ	_	_	5	mark	_	_
4	boken	bok	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	nsubj:pass	_	_
5	skrevs	skriva	VERB	PAST-PASS	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	2	ccomp	_	_
6	på	på	ADP	_	_	7	case	_	_
7	arabiska	arabiska	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
8	av	av	ADP	_	_	11	case	_	_
9	Cid	Cid	PROPN	SG-NOM	Case=Nom|Number=Sing	5	obl:agent	_	_
10	Hamete	Hamete	PROPN	SG-NOM	Case=Nom|Number=Sing	9	flat	_	_
11	Benengeli	Benengeli	PROPN	SG-NOM	Case=Nom|Number=Sing	9	flat	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 obl:agent	color:blue
1	Jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	hoppas	hoppas	VERB	PRES-DPO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	att	att	SCONJ	_	_	9	mark	_	_
4	den	den	DET	SG-DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
5	kärlek	kärlek	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	nsubj	_	_
6	de	de	PRON	PERS-P3PL-NOM	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	7	nsubj	_	_
7	skänker	skänka	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
8	oss	vi	PRON	PERS-P1PL-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	7	obj	_	_
9	är	vara	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
10	av	av	ADV	_	Case=Nom	9	advmod	_	_
11	bättre	bra	ADJ	CMP	Case=Nom|Degree=Cmp	12	amod	_	_
12	kvalitet	kvalitet	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obl	_	_
13	än	än	ADP	CMP	_	14	case	_	_
14	den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	12	nmod	_	_
15	de	de	PRON	PERS-P3PL-NOM	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	16	nsubj	_	_
16	får	få	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	_
17	av	av	ADP	_	_	18	case	_	_
18	oss	vi	PRON	PERS-P1PL-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	16	obl:agent	_	SpaceAfter=No
19	,	,	PUNCT	Comma	_	23	punct	_	_
20	för	för	SCONJ	_	_	23	mark	_	_
21	vår	vi	PRON	P1PL-GEN-SG	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	22	nmod:poss	_	_
22	egen	egen	ADJ	POS-SG-IND	Case=Nom|Degree=Pos|Gender=Com|Number=Sing	23	nsubj	_	_
23	är	vara	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
24	av	av	ADP	_	_	30	case	_	_
25	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	30	det	_	_
26	mycket	mycket	ADV	_	Degree=Pos	27	advmod	_	_
27	lågklassig	lågklassig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	30	amod	_	_
28	uppåtsipprande	uppåtsipprande	ADJ	NDE	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	30	amod	_	_
29	växtsaftsliknande	växtsaftsliknande	ADJ	NDE	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	30	amod	_	_
30	sort	sort	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	23	obl	_	_
31	som	som	PRON	REL	PronType=Rel	34	nsubj	_	_
32	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	34	cop	_	_
33	lika	lika	ADV	CMP	_	34	advmod	_	_
34	kortlivad	kortlivad	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	30	acl:relcl	_	_
35	som	som	ADP	_	_	36	case	_	_
36	spontan	spontan	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	34	amod	_	SpaceAfter=No
37	.	.	PUNCT	Period	_	2	punct	_	_

~~~



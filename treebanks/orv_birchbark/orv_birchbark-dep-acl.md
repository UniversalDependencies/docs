---
layout: base
title:  'Statistics of acl in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="orv_birchbark-dep-acl-relcl.html">acl:relcl</a></tt>.

40 nodes (0%) are attached to their parents as `acl`.

32 instances of `acl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.025.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (17; 43% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt> (8; 20% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (6; 15% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	а	а	CCONJ	CONJ	_	6	cc	_	wf="а"|addr="055:4"
2	ко	къ	ADP	PR,gvrn:dat	_	3	case	_	wf="ко"|comment="gvrn:dat"|addr="055:4"
3	мне	ꙗзъ	PRON	SPRO,sg,1p,dat,ton	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	orphan	_	wf="мне"|comment="clitic_ton"|addr="055:4"
4	…	…	PUNCT	_	_	6	punct	_	wf="…"|line_id="5"|addr="055:5"
5	дворнюю	дворнии	ADJ	A,f,sg,acc	Case=Acc|Gender=Fem|Number=Sing	6	amod	_	wf="дворнюю"|addr="055:5"
6	грамотꙋ	грамота	NOUN	S,f,sg,acc	Case=Acc|Gender=Fem|Number=Sing	0	root	_	wf="грамоту"|addr="055:5"
7	е	быти	VERB	V,praes,sg,3p	Number=Sing|Person=3|Tense=Pres	6	acl	_	wf="е"|addr="055:5"
8	ли	ли	PART	PART	_	7	advmod	_	wf="ли"|addr="055:5"
9	ꙋ	у	ADP	PR,gvrn:gen	_	10	case	_	wf="у"|comment="gvrn:gen"|addr="055:5"
10	те[бе]	ты	PRON	SPRO,sg,2p,gen	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	obl	_	wf="тебе"|addr="055:5"
11	(…)	(…)	PUNCT	_	_	6	punct	_	wf="…"|addr="055:5"

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	али	али	SCONJ	CONJ	_	3	mark	_	wf="али"|addr="424:3"
2	не	не	PART	PART	Polarity=Neg	3	advmod	_	wf="не"|addr="424:3"
3	идете	ити	VERB	V,nonpast,pl,2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	wf="идете"|comment="tense_nonpast"|addr="424:3"
4	а	а	CCONJ	CONJ	_	5	cc	_	wf="а"|line_id="4"|addr="424:4"
5	присъте	прислати	VERB	V,imper,pl,2p,syll_omitted	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="присъте"|comment="syll_omitted"|addr="424:4"
6	ми	ꙗзъ	PRON	SPRO,sg,1p,dat,cl	Case=Dat|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	5	iobj	_	wf="ми"|addr="424:4"
7	грамотичу	грамотица	NOUN	S,f,sg,acc	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	wf="грамотичу"|addr="424:4"
8	сторови	сторовыи	ADJ	A,m,pl,nom,brev	Case=Nom|Gender=Masc|Number=Plur|Variant=Short	7	acl	_	wf="сторови"|meaning="благополучный, живой-здоровый"|addr="424:4"
9	ли	ли	PART	PART	_	8	advmod	_	wf="ли"|addr="424:4"
10	есте	быти	AUX	V,praes,pl,2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	wf="есте"|addr="424:4"

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	(а	а	CCONJ	CONJ,reconstr	_	5	cc	_	wf="а"|comment="reconstr"|addr="373:4"
2	нин)е	нинѣ	ADV	ADV,reconstr	_	5	advmod	_	wf="нине"|comment="reconstr"|addr="373:4"
3	ꙩ	о	ADP	PR,gvrn:loc	_	4	case	_	wf="о"|comment="gvrn:loc"|addr="373:4"
4	томъ	тотъ	DET	APRO,sg,m,loc	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	5	obl	_	wf="томъ"|addr="373:4"
5	попецалисе	попечалитисѧ	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	0	root	_	wf="попецалисе"|meaning="позаботиться"|addr="373:4"
6	ка[ко]	како	ADV	ADV	_	8	advmod	_	wf="како"|addr="373:4"
7	тому	тотъ	DET	APRO,sg,n,dat	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	8	iobj	_	wf="тому"|addr="373:4"
8	би<lbr/>(ти)	быти	VERB	V,inf	VerbForm=Inf	4	acl	_	wf="бити"|after:line_id=5|addr="373:4"

~~~



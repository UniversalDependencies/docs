---
layout: base
title:  'Statistics of csubj in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `csubj`

This relation is universal.

14 nodes (0%) are attached to their parents as `csubj`.

9 instances of `csubj` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85714285714286.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (6; 43% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="orv_birchbark-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	нн	нѣ	VERB	PRAEDIC	Polarity=Neg	0	root	_	wf="нн"|meaning="нет, не имеется"|line_id="5"|addr="477:5"
2	чимь	что	PRON	APRO,sg,n,ins	Case=Ins|Gender=Neut|Number=Sing|PronType=Neg	3	iobj	_	wf="чимь"|addr="477:5"
3	пособити	пособити	VERB	V,inf	VerbForm=Inf|Voice=Act	1	csubj	_	wf="пособити"|addr="477:5"
4	нѣ	нѣ	VERB	PRAEDIC	Polarity=Neg	1	conj	_	wf="нѣ"|meaning="нет, не имеется"|addr="477:5"
5	ꙩ	о	ADP	PR,gvrn:acc	_	6	case	_	wf="о"|comment="gvrn:acc"|addr="477:5"
6	че	что	PRON	APRO,rel,acc	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	8	obl	_	wf="че"|addr="477:5"
7	и	и	CCONJ	CONJ	_	8	cc	_	wf="и"|addr="477:5"
8	сѣдит[и]	сѣдѣти	VERB	V,inf	VerbForm=Inf|Voice=Act	4	csubj	_	wf="сѣдити"|addr="477:5"

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	цо	что	PRON	APRO,rel,nom	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	8	csubj	_	wf="цо"|line_id="2"|addr="383:2"
2	прилбица	прилбица	NOUN	S,f,sg,nom	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	wf="прилбица"|meaning="подшлемник"|addr="383:2"
3	·	·	PUNCT	_	_	5	punct	_	wf="·"|addr="383:2"
4	ꙋ	у	ADP	PR,gvrn:gen	_	5	case	_	wf="у"|comment="gvrn:gen"|addr="383:2"
5	тебе	ты	PRON	SPRO,sg,2p,gen	Case=Gen|Number=Sing|Person=2|PronType=Prs	1	obl	_	wf="тебе"|addr="383:2"
6	ꙩ<lbr/>ндрѣѥва	ондрѣѥвъ	ADJ	A,possess,f,sg,nom	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes	8	amod	_	wf="ондрѣева"|addr="383:2"
7	·	·	PUNCT	_	_	8	punct	_	wf="·"|line_id="3"|addr="383:3"
8	прилбица	прилбица	NOUN	S,f,sg,nom	Case=Nom|Gender=Fem|Number=Sing	0	root	_	wf="прилбица"|meaning="подшлемник"|addr="383:3"
9	·	·	PUNCT	_	_	8	punct	_	wf="·"|addr="383:3"

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 csubj	color:blue
1	а	а	CCONJ	CONJ	_	2	cc	_	wf="а"|line_id="5"|addr="765:5"
2	уомилоседри[с]ѧ	умилосердитисѧ	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	0	root	_	wf="уомилоседрися"|addr="765:5"
3	брать	братъ	NOUN	S,m,sg,voc	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	wf="брать"|addr="765:5"
4	дае	даꙗти	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	parataxis	_	wf="дае"|addr="765:5"
5	ми	ꙗзъ	PRON	SPRO,sg,1p,dat,cl	Case=Dat|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	4	iobj	_	wf="ми"|addr="765:5"
6	место	мѣсто	NOUN	S,n,sg,acc	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	wf="место"|addr="765:5"
7	зади	зади	ADV	ADV	_	4	advmod	_	wf="зади"|addr="765:5"
8	не	не	PART	PART	Polarity=Neg	10	advmod	_	wf="не"|addr="765:5"
9	на	на	ADP	PR,gvrn:loc	_	10	case	_	wf="на"|comment="gvrn:loc"|addr="765:5"
10	цеме	что	PRON	APRO,rel,loc	Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	4	parataxis	_	wf="цеме"|addr="765:5"
11	сѧ	сѧ	PRON	_	Case=Acc|Clitic=Yes|PronType=Prs|Reflex=Yes	12	expl:pv	_	wf="ся"|addr="765:5"
12	ко<lbr/>рмити	кормитисѧ	VERB	V,inf	VerbForm=Inf|Voice=Mid	10	csubj	_	wf="кормити"|stats="no"|addr="765:5"

~~~



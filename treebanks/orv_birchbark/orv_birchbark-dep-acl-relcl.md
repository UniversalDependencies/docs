---
layout: base
title:  'Statistics of acl:relcl in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-acl.html">acl</a></tt>.

28 nodes (0%) are attached to their parents as `acl:relcl`.

19 instances of `acl:relcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71428571428571.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (12; 43% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (8; 29% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	+	+	SYM	_	_	3	discourse	_	wf="+"|addr="727:2"
2	[се]и	сеи	DET	APRO,sg,m,nom	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	wf="сеи"|addr="727:2"
3	дн҃[е]	день	NOUN	S,m,sg,nom	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="дене"|addr="727:2"
4	+	+	SYM	_	_	6	discourse	_	wf="+"|addr="727:2"
5	ижь	иже	DET	APRO,rel,sg,m,acc	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	6	obj	_	wf="ижь"|line_id="3"|addr="727:3"
6	сътвори	створити	VERB	V,aor,sg,3p	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	wf="сътвори"|ctxt_comment="creare"|comment="aor"|addr="727:3"
7	господѣ	господь	NOUN	S,m,sg,nom	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	wf="господѣ"|addr="727:3"
8	возрадꙋемъсѧ	возрадоватисѧ	VERB	V,nonpast,pl,1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	3	parataxis	_	wf="возрадуемъся"|comment="tense_nonpast"|addr="727:3"

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 acl:relcl	color:blue
1	а	а	CCONJ	CONJ	_	3	cc	_	wf="а"|line_id="2"|addr="163:2"
2	тꙑ	ты	PRON	SPRO,sg,2p,nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	wf="ты"|addr="163:2"
3	прода[е]	продаꙗти	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="продае"|addr="163:2"
4	коне	конь	NOUN	S,m,sg,acc	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	wf="коне"|addr="163:2"
5	колико	колько	NUM	NUM,card,nom	Case=Acc|NumForm=Word|NumType=Card	7	obj	_	wf="колико"|ctxt_comment="сколько тебе или сколько бы ни"|addr="163:2"
6	ти	ты	PRON	SPRO,sg,2p,dat,cl	Case=Dat|Clitic=Yes|Number=Sing|Person=2|PronType=Prs	7	iobj	_	wf="ти"|comment="alt_ana:lemma=ти:gr=PART"|addr="163:2"
7	водадѧ	вдати	VERB	V,nonpast,pl,3p	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	advcl	_	wf="водадя"|comment="tense_nonpast"|comment="alt_ana:lemma=вдати:gr=V,partcp,praes,act,sg,m,nom"|addr="163:2"
8	а	а	CCONJ	CONJ	_	10	cc	_	wf="а"|addr="163:2"
9	чето	что	PRON	APRO,rel,acc	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	10	obj	_	wf="чето"|addr="163:2"
10	потерѧеш[и]	потерѧти	VERB	V,nonpast,sg,2p	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	wf="потеряеши"|comment="tense_nonpast"|addr="163:2"
11	а	а	CCONJ	CONJ	_	13	cc	_	wf="а"|line_id="3"|addr="163:3"
12	то	тотъ	DET	APRO,sg,n,acc	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	13	obj	_	wf="то"|addr="163:3"
13	помени	помнити	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	conj	_	wf="помени"|addr="163:3"

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl:relcl	color:blue
1	у	у	ADP	PR,gvrn:gen	_	2	case	_	wf="у"|comment="gvrn:gen"|line_id="7"|addr="1054:_Оборот:7"
2	кого	кто	PRON	APRO,sg,gen	Case=Gen|Number=Sing|PronType=Rel	5	acl:relcl	_	wf="кого"|addr="1054:_Оборот:7"
3	грамота	грамота	NOUN	S,f,sg,nom	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	wf="грамота"|addr="1054:_Оборот:7"
4	у	у	ADP	PR,gvrn:gen	_	5	case	_	wf="у"|comment="gvrn:gen"|addr="1054:_Оборот:7"
5	того	тотъ	DET	APRO,sg,m,gen	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	0	root	_	wf="того"|comment="alt_ana:lemma=тотъ:gr=APRO,sg,n,gen"|addr="1054:_Оборот:7"
6	полуторъ	полтора	NUM	NUM,card,f,sg,nom	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Frac	7	nummod:gov	_	wf="полуторъ"|line_id="8"|addr="1054:_Оборот:8"
7	грѣвни	гривна	NOUN	S,f,sg,gen	Case=Gen|Gender=Fem|Number=Sing	5	nsubj	_	wf="грѣвни"|addr="1054:_Оборот:8"

~~~



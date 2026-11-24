---
layout: base
title:  'Statistics of aux in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="orv_birchbark-dep-aux-pass.html">aux:pass</a></tt>.

283 nodes (1%) are attached to their parents as `aux`.

158 instances of `aux` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57243816254417.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-AUX.html">AUX</a></tt> (274; 97% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_birchbark-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	…	…	PUNCT	_	_	5	punct	_	wf="…"|line_id="2"|addr="015:2"
2	[м]ѧ	ꙗзъ	PRON	SPRO,sg,1p,acc,cl	Case=Acc|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	5	obj	_	wf="мя"|addr="015:2"
3	гн҃е	господинъ	NOUN	S,m,sg,voc	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	wf="господине"|comment="alt_ana:lemma=осподинъ:gr=S,m,sg,voc"|addr="015:2"
4	ѥси	быти	AUX	V,praes,sg,2p,in_perf	Analyt=Yes|Number=Sing|Person=2|Tense=Pres	5	aux	_	wf="еси"|comment="in_perf"|addr="015:2"
5	пожа[л]овал…	пожаловати	VERB	V,l-partcp,perf,sg,2p,m	Analyt=Yes|Gender=Masc|Number=Sing|Person=2|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="пожаловал…"|tense=perf|addr="015:2"
6	…	…	PUNCT	_	_	5	punct	_	wf="…"|line_id="3"|addr="015:3"

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	ажо	аже	SCONJ	CONJ	_	4	mark	_	wf="ажо"|addr="Смол._9/8:2"
2	еси	быти	AUX	V,praes,sg,2p,in_perf?,fragment	Analyt=Yes|Fragment=Yes|Number=Sing|Person=2|Tense=Pres	4	aux	_	wf="еси"|comment="in_perf?"|addr="Смол._9/8:2"
3	две	два	NUM	NUM,card,f,nom,no_interpr	Case=Nom|Gender=Fem|NumForm=Word|NumType=Card	4	nsubj	_	wf="две"|comment="no_interpr"|comment="alt_ana:lemma=два:gr=NUM,card,f,acc,no_interpr"|addr="Смол._9/8:2"
4	[пъ]<lbr/>…	_	X	NONLEX	_	0	root	_	wf="пъ…"|after:line_id=3|addr="Смол._9/8:2"

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	аже	аже	SCONJ	CONJ,in_CONJ	_	4	mark	_	wf="аже"|comment="in_compound_CONJ"|addr="752:_Начальная_часть:4а"
2	бꙑ	быти	AUX	V,aor,sg,3p,in_CONJ	Mood=Cnd|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	wf="бы"|comment="aor,in_compound_CONJ"|comment="alt_ana:lemma=бы:gr=PART,in_CONJ"|addr="752:_Начальная_часть:4а"
3	ти	ты	PRON	SPRO,sg,2p,dat,cl	Case=Dat|Clitic=Yes|Number=Sing|Person=2|PronType=Prs	4	iobj	_	wf="ти"|addr="752:_Начальная_часть:4а"
4	годьнъ	годныи	ADJ	A,n?,sg,nom,brev	Case=Nom|Gender=Neut|Number=Sing|Variant=Short	11	advcl	_	wf="годьнъ"|comment="n?,gender_unsure"|comment="alt_ana:lemma=годныи:gr=A,m?,sg,nom,brev"|addr="752:_Начальная_часть:4а"
5	то	то	SCONJ	CONJ	_	11	mark	_	wf="то"|addr="752:_Начальная_часть:4а"
6	[из]	изъ	ADP	PR,gvrn:gen	_	7	case	_	wf="из"|comment="gvrn:gen"|addr="752:_Начальная_часть:4а"
7	оцью	око	NOUN	S,n,du,gen	Case=Gen|Gender=Neut|Number=Dual	10	obl	_	wf="оцью"|meaning="глаз"|addr="752:_Начальная_часть:4а"
8	бꙑ	бы	AUX	PART	Mood=Cnd	10	aux	_	wf="бы"|addr="752:_Начальная_часть:4а"
9	сѧ	сѧ	PRON	_	Case=Acc|Clitic=Yes|PronType=Prs|Reflex=Yes	10	expl:pv	_	wf="ся"|addr="752:_Начальная_часть:4а"
10	вꙑтьрьго	вытергнутисѧ	VERB	V,partcp,praet,sg,m,nom	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	11	advcl	_	wf="вытьрьго"|meaning="вырваться"|addr="752: Начальная часть:4а"
11	притькль	притечи	VERB	V,l-partcp,cond,sg,2p,m	Gender=Masc|Mood=Cnd|Number=Sing|Person=2|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="притькль"|meaning="прибежать, быстро прийти"|addr="752:_Начальная_часть:4а"
12	…	…	PUNCT	_	_	11	punct	_	wf="…"|line_id="5а"|addr="752:_Начальная_часть:5а"

~~~



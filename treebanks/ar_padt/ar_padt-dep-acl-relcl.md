---
layout: base
title:  'Statistics of acl:relcl in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ar_padt-dep-acl.html">acl</a></tt>.

2203 nodes (1%) are attached to their parents as `acl:relcl`.

2201 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.77939173853836.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (2055; 93% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (52; 2% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (49; 2% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="ar_padt-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="ar_padt-pos-DET.html">DET</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="ar_padt-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ar_padt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	*	*	PUNCT	G---------	_	4	punct	4:punct	Vform=ذ|Translit=*
2	ما	مَا	DET	S---------	_	4	nsubj	4:nsubj	Vform=مَا|Gloss=what,which|Root=mA|Translit=mā|LTranslit=mā
3	هي	هُوَ	PRON	SP---3FS1-	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nmod	4:nmod:nom	Vform=هِيَ|Gloss=he,she,it|Translit=hiya|LTranslit=huwa
4	التهم	تُهمَة	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	0	root	0:root|7:nsubj:pass	Vform=اَلتُّهَمُ|Gloss=accusation,charge|Root=w_h_m|Translit=at-tuhamu|LTranslit=tuhmat
5	التي	اَلَّذِي	DET	SR----FS1-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	7	nsubj:pass	4:ref	Vform=اَلَّتِي|Gloss=that,which|Root=l|Translit=allatī|LTranslit=allaḏī
6	س	سَ	AUX	F---------	_	7	aux:pass	7:aux:pass	Vform=سَ|Gloss=will|Root=sa|Translit=sa|LTranslit=sa
7	توجه	وَجَّه	VERB	VIIP-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	4	acl:relcl	4:acl:relcl	Vform=تُوَجَّهُ|Gloss=send,direct|Root=w_^g_h|Translit=tuwaǧǧahu|LTranslit=waǧǧah
8	إلى	إِلَى	ADP	P---------	AdpType=Prep	10	case	10:case	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
9	صدام	صدام	X	U---------	_	10	nmod	10:nmod	Vform=صدام|Root=OOV|Translit=ṣdām
10	حسين	حسين	X	U---------	_	7	obl:arg	7:obl:arg:إِلَى	Vform=حسين|Root=OOV|Translit=ḥsyn
11	و	وَ	CCONJ	C---------	_	12	cc	12:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
12	أعضاء	عُضو	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	10	conj	7:obl:arg:إِلَى|10:conj	Vform=أَعضَاءِ|Gloss=member|Root=`_.d_w|Translit=ʾaʿḍāʾi|LTranslit=ʿuḍw
13	قيادة	قِيَادَة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	12	nmod	12:nmod:gen	Vform=قِيَادَةِ|Gloss=leadership,command,leaders,commanders|Root=q_w_d|Translit=qiyādati|LTranslit=qiyādat
14	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nmod	13:nmod:gen	Vform=هِ|Gloss=he,she,it|Translit=hi|LTranslit=huwa
15	؟	؟	PUNCT	G---------	_	4	punct	4:punct	Vform=؟|Translit=?

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	غير	غَير	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	4	obl	4:obl:acc	Vform=غَيرَ|Gloss=other,unlike,not,non_-|Root=.g_y_r|Translit=ġayra|LTranslit=ġayr
2	ان	أَنَّ	SCONJ	C---------	_	4	mark	4:mark	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
3	الشرطة	شُرطَة	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	4	nsubj	4:nsubj|6:nsubj	Vform=اَلشُّرطَةَ|Gloss=police|Root=^s_r_.t|Translit=aš-šurṭata|LTranslit=šurṭat
4	عادت	عَاد	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	0	root	0:root	Vform=عَادَت|Gloss=return,go_back,no_longer|Root=`_w_d|Translit=ʿādat|LTranslit=ʿād
5	و	وَ	CCONJ	C---------	_	6	cc	6:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
6	ألقت	أَلقَى	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	4	conj	0:root|4:conj	Vform=أَلقَت|Gloss=deliver,throw,arrest|Root=l_q_y|Translit=ʾalqat|LTranslit=ʾalqā
7	القبض	قَبض	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	6	obj	6:obj	Vform=اَلقَبضَ|Gloss=arrest,seizure|Root=q_b_.d|Translit=al-qabḍa|LTranslit=qabḍ
8	على	عَلَى	ADP	P---------	AdpType=Prep	9	case	9:case	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
9	عادل	عادل	X	U---------	_	7	obl:arg	7:obl:arg:عَلَى|11:nsubj:pass	Vform=عادل|Root=OOV|Translit=ʿādl
10	الذي	اَلَّذِي	DET	SR----MS2-	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj:pass	9:ref	Vform=اَلَّذِي|Gloss=that,which|Root=l|Translit=allaḏī|LTranslit=allaḏī
11	احيل	أَحَال	VERB	VP-P-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Pass	9	acl:relcl	9:acl:relcl	Vform=أُحِيلَ|Gloss=refer,assign,appear_(_in_court_)|Root=.h_w_l|Translit=ʾuḥīla|LTranslit=ʾaḥāl
12	الى	إِلَى	ADP	P---------	AdpType=Prep	13	case	13:case	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
13	المدعي	مُدَّعِي	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	11	obl	11:obl:إِلَى:gen	Vform=اَلمُدَّعِي|Gloss=plaintiff,prosecutor|Root=d_`_w|Translit=al-muddaʿī|LTranslit=muddaʿī
14	العام	عَامّ	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	amod	13:amod	SpaceAfter=No|Vform=اَلعَامِّ|Gloss=general,common,public|Root=`_m_m|Translit=al-ʿāmmi|LTranslit=ʿāmm
15	.	.	PUNCT	G---------	_	4	punct	4:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	كان	كَان	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	9	cop	9:cop	Vform=كَانَ|Gloss=be,is,exist|Root=k_w_n|Translit=kāna|LTranslit=kān
3	المستهدف	مُستَهدَف	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	5:nsubj|9:nsubj	Vform=اَلمُستَهدَفُ|Gloss=targeted,guided|Root=h_d_f|Translit=al-mustahdafu|LTranslit=mustahdaf
4	الذي	اَلَّذِي	DET	SR----MS1-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	3:ref	Vform=اَلَّذِي|Gloss=that,which|Root=l|Translit=allaḏī|LTranslit=allaḏī
5	أعلنت	أَعلَن	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	3	acl:relcl	3:acl:relcl	Vform=أَعلَنَت|Gloss=announce,declare|Root=`_l_n|Translit=ʾaʿlanat|LTranslit=ʾaʿlan
6	ه	هُوَ	PRON	SP---3MS4-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	5:obj	Vform=هُ|Gloss=he,she,it|Translit=hu|LTranslit=huwa
7	الحكومة	حُكُومَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	5	nsubj	5:nsubj	Vform=اَلحُكُومَةُ|Gloss=government,administration|Root=.h_k_m|Translit=al-ḥukūmatu|LTranslit=ḥukūmat
8	هو	هُوَ	PRON	SP---3MS1-	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obl	9:obl:nom	Vform=هُوَ|Gloss=he,she,it|Translit=huwa|LTranslit=huwa
9	3	3	NUM	Q---------	NumForm=Digit	1	parataxis	1:parataxis	Vform=٣|Translit=3
10	ملايين	مِليُون	NUM	QM-----P2R	Case=Gen|Definite=Cons|Number=Plur|NumForm=Word	9	nummod	9:nummod	Vform=مَلَايِينِ|Gloss=million|Root=m_l_y_n|Translit=malāyīni|LTranslit=milyūn
11	طن	طُنّ	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	10	nmod	10:nmod:gen	SpaceAfter=No|Vform=طُنٍّ|Gloss=ton|Root=.t_n_n|Translit=ṭunnin|LTranslit=ṭunn
12	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~



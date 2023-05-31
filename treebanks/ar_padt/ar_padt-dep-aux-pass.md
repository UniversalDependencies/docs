---
layout: base
title:  'Statistics of aux:pass in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ar_padt-dep-aux.html">aux</a></tt>.

110 nodes (0%) are attached to their parents as `aux:pass`.

110 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (110; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
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



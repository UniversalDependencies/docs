---
layout: base
title:  'Statistics of nsubj:pass in UD_Arabic'
udver: '2'
---

## Treebank Statistics: UD_Arabic: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ar-dep-nsubj.html">nsubj</a></tt>.

769 nodes (0%) are attached to their parents as `nsubj:pass`.

401 instances of `nsubj:pass` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34590377113134.

The following 15 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ar-pos-VERB.html">VERB</a></tt>-<tt><a href="ar-pos-NOUN.html">NOUN</a></tt> (395; 51% instances), <tt><a href="ar-pos-VERB.html">VERB</a></tt>-<tt><a href="ar-pos-DET.html">DET</a></tt> (207; 27% instances), <tt><a href="ar-pos-VERB.html">VERB</a></tt>-<tt><a href="ar-pos-NUM.html">NUM</a></tt> (53; 7% instances), <tt><a href="ar-pos-VERB.html">VERB</a></tt>-<tt><a href="ar-pos-ADJ.html">ADJ</a></tt> (32; 4% instances), <tt><a href="ar-pos-VERB.html">VERB</a></tt>-<tt><a href="ar-pos-X.html">X</a></tt> (29; 4% instances), <tt><a href="ar-pos-VERB.html">VERB</a></tt>-<tt><a href="ar-pos-PRON.html">PRON</a></tt> (13; 2% instances), <tt><a href="ar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="ar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="ar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="ar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="ar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ar-pos-PRON.html">PRON</a></tt>-<tt><a href="ar-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	غير	غَير	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	5	cc	_	Vform=غَيرَ|Gloss=other,unlike,not,non_-|Root=.g_y_r|Translit=ġayra|LTranslit=ġayr
2	أن	أَنَّ	CCONJ	C---------	_	5	mark	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
3	ه	هُوَ	PRON	SP---3MS4-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	fixed	_	Vform=هُ|Gloss=he,she,it|Translit=hu|LTranslit=huwa
4	لا	لَا	PART	F---------	_	5	advmod	_	Vform=لَا|Gloss=no,not|Root=lA|Translit=lā|LTranslit=lā
5	يوجد	وَجَد	VERB	VIIP-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	_	Vform=يُوجَدُ|Gloss=find,be_found,exist|Root=w_^g_d|Translit=yūǧadu|LTranslit=waǧad
6	اجماع	إِجمَاع	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	5	nsubj:pass	_	Vform=إِجمَاعٌ|Gloss=consensus,agreement|Root=^g_m_`|Translit=ʾiǧmāʿun|LTranslit=ʾiǧmāʿ
7	بين	بَينَ	ADP	PI------4-	AdpType=Prep|Case=Acc	8	case	_	Vform=بَينَ|Gloss=between,among|Root=b_y_n|Translit=bayna|LTranslit=bayna
8	دول	دَولَة	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	6	nmod	_	Vform=دُوَلِ|Gloss=state,country|Root=d_w_l|Translit=duwali|LTranslit=dawlat
9	اوبك	أُوبِك	X	X---------	Foreign=Yes	8	nmod	_	Vform=أُوبِك|Gloss=OPEC|Root='Ubik|Translit=ʾūbik|LTranslit=ʾūbik
10	ب	بِ	ADP	P---------	AdpType=Prep	12	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
11	شأن	شَأن	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	12	cc	_	Vform=شَأنِ|Gloss=matter,affair,concern,regard|Root=^s_'_n|Translit=šaʾni|LTranslit=šaʾn
12	رفع	رَفع	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	nmod	_	Vform=رَفعِ|Gloss=raising,lifting,increasing|Root=r_f_`|Translit=rafʿi|LTranslit=rafʿ
13	الانتاج	إِنتَاج	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	12	nmod	_	SpaceAfter=No|Vform=اَلإِنتَاجِ|Gloss=production,output|Root=n_t_^g|Translit=al-ʾintāǧi|LTranslit=ʾintāǧ
14	.	.	PUNCT	G---------	_	5	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	*	*	PUNCT	G---------	_	4	punct	_	Vform=*|Translit=*
2	ما	مَا	DET	S---------	_	4	nsubj	_	Vform=مَا|Gloss=what,which|Root=mA|Translit=mā|LTranslit=mā
3	هي	هُوَ	PRON	SP---3FS1-	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	cc	_	Vform=هِيَ|Gloss=he,she,it|Translit=hiya|LTranslit=huwa
4	التهم	تُهمَة	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	0	root	_	Vform=اَلتُّهَمُ|Gloss=accusation,charge|Root=w_h_m|Translit=at-tuhamu|LTranslit=tuhmat
5	التي	اَلَّذِي	DET	SR----FS1-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	7	nsubj:pass	_	Vform=اَلَّتِي|Gloss=that,which|Root=l|Translit=allatī|LTranslit=allaḏī
6	س	سَ	PART	F---------	_	7	aux:pass	_	Vform=سَ|Gloss=will|Root=sa|Translit=sa|LTranslit=sa
7	توجه	وَجَّه	VERB	VIIP-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	4	acl	_	Vform=تُوَجَّهُ|Gloss=send,direct|Root=w_^g_h|Translit=tuwaǧǧahu|LTranslit=waǧǧah
8	إلى	إِلَى	ADP	P---------	AdpType=Prep	10	case	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
9	صدام	صدام	X	U---------	_	10	nmod	_	Vform=صدام|Translit=SdAm
10	حسين	حسين	X	U---------	_	7	obl:arg	_	Vform=حسين|Translit=Hsyn
11	و	وَ	CCONJ	C---------	_	12	cc	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
12	أعضاء	عُضو	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	10	conj	_	Vform=أَعضَاءِ|Gloss=member|Root=`_.d_w|Translit=ʾaʿḍāʾi|LTranslit=ʿuḍw
13	قيادة	قِيَادَة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	12	nmod	_	Vform=قِيَادَةِ|Gloss=leadership,command,leaders,commanders|Root=q_w_d|Translit=qiyādati|LTranslit=qiyādat
14	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nmod	_	Vform=هِ|Gloss=he,she,it|Translit=hi|LTranslit=huwa
15	؟	؟	PUNCT	G---------	_	4	punct	_	Vform=؟|Translit=؟

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	بين	بَينَ	ADP	PI------4-	AdpType=Prep|Case=Acc	3	case	_	Vform=بَينَ|Gloss=between,among|Root=b_y_n|Translit=bayna|LTranslit=bayna
3	الجرحى	جَرِيح	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	5	obl	_	SpaceAfter=No|Vform=اَلجَرحَى|Gloss=wounded,injured,hurt|Root=^g_r_.h|Translit=al-ǧarḥā|LTranslit=ǧarīḥ
4	،	،	PUNCT	G---------	_	3	punct	_	Vform=،|Translit=،
5	اعتبر	اِعتَبَر	VERB	VP-P-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Pass	1	parataxis	_	Vform=اُعتُبِرَ|Gloss=consider,regard|Root=`_b_r|Translit=uʿtubira|LTranslit=iʿtabar
6	16	16	NUM	Q---------	NumForm=Digit	5	nsubj:pass	_	Vform=١٦|Translit=16
7	أن	أَنَّ	CCONJ	C---------	_	8	mark	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
8	هم	هُوَ	PRON	SP---3MP4-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	Vform=هُم|Gloss=he,she,it|Translit=hum|LTranslit=huwa
9	في	فِي	ADP	P---------	AdpType=Prep	8	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
10	حال	حَال	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	8	obl	_	Vform=حَالٍ|Gloss=situation,condition,case|Root=.h_w_l|Translit=ḥālin|LTranslit=ḥāl
11	خطرة	خَطِر	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No|Vform=خَطِرَةٍ|Gloss=serious,dangerous,critical|Root=_h_.t_r|Translit=ḫaṭiratin|LTranslit=ḫaṭir
12	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~



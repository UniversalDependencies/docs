---
layout: base
title:  'Statistics of nsubj:pass in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ar_padt-dep-nsubj.html">nsubj</a></tt>.

775 nodes (0%) are attached to their parents as `nsubj:pass`.

388 instances of `nsubj:pass` (50%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22193548387097.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt> (418; 54% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-DET.html">DET</a></tt> (218; 28% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-NUM.html">NUM</a></tt> (56; 7% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-X.html">X</a></tt> (36; 5% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (32; 4% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-PRON.html">PRON</a></tt> (15; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	غير	غَير	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	5	obl	5:obl:acc	Vform=غَيرَ|Gloss=other,unlike,not,non_-|Root=.g_y_r|Translit=ġayra|LTranslit=ġayr
2	أن	أَنَّ	SCONJ	C---------	_	5	mark	5:mark	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
3	ه	هُوَ	PRON	SP---3MS4-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	fixed	2:fixed	Vform=هُ|Gloss=he,she,it|Translit=hu|LTranslit=huwa
4	لا	لَا	PART	F---------	_	5	advmod	5:advmod	Vform=لَا|Gloss=no,not|Root=lA|Translit=lā|LTranslit=lā
5	يوجد	وَجَد	VERB	VIIP-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	0:root	Vform=يُوجَدُ|Gloss=find,be_found,exist|Root=w_^g_d|Translit=yūǧadu|LTranslit=waǧad
6	اجماع	إِجمَاع	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	5	nsubj:pass	5:nsubj:pass	Vform=إِجمَاعٌ|Gloss=consensus,agreement|Root=^g_m_`|Translit=ʾiǧmāʿun|LTranslit=ʾiǧmāʿ
7	بين	بَينَ	ADP	PI------4-	AdpType=Prep|Case=Acc	8	case	8:case	Vform=بَينَ|Gloss=between,among|Root=b_y_n|Translit=bayna|LTranslit=bayna
8	دول	دَولَة	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	6	nmod	6:nmod:بَينَ:gen	Vform=دُوَلِ|Gloss=state,country|Root=d_w_l|Translit=duwali|LTranslit=dawlat
9	اوبك	أُوبِك	X	X---------	Foreign=Yes	8	nmod	8:nmod	Vform=أُوبِك|Gloss=OPEC|Root='Ubik|Translit=ʾūbik|LTranslit=ʾūbik
10	ب	بِ	ADP	P---------	AdpType=Prep	12	case	12:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
11	شأن	شَأن	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	10	fixed	10:fixed	Vform=شَأنِ|Gloss=matter,affair,concern,regard|Root=^s_'_n|Translit=šaʾni|LTranslit=šaʾn
12	رفع	رَفع	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	nmod	6:nmod:بِ_شَأن:gen	Vform=رَفعِ|Gloss=raising,lifting,increasing|Root=r_f_`|Translit=rafʿi|LTranslit=rafʿ
13	الانتاج	إِنتَاج	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	12	nmod	12:nmod:gen	SpaceAfter=No|Vform=اَلإِنتَاجِ|Gloss=production,output|Root=n_t_^g|Translit=al-ʾintāǧi|LTranslit=ʾintāǧ
14	.	.	PUNCT	G---------	_	5	punct	5:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	بين	بَينَ	ADP	PI------4-	AdpType=Prep|Case=Acc	3	case	3:case	Vform=بَينَ|Gloss=between,among|Root=b_y_n|Translit=bayna|LTranslit=bayna
3	الجرحى	جَرِيح	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	5	obl	5:obl:بَينَ:gen	SpaceAfter=No|Vform=اَلجَرحَى|Gloss=wounded,injured,hurt|Root=^g_r_.h|Translit=al-ǧarḥā|LTranslit=ǧarīḥ
4	،	،	PUNCT	G---------	_	3	punct	3:punct	Vform=،|Translit=,
5	اعتبر	اِعتَبَر	VERB	VP-P-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Pass	1	parataxis	1:parataxis	Vform=اُعتُبِرَ|Gloss=consider,regard|Root=`_b_r|Translit=uʿtubira|LTranslit=iʿtabar
6	16	16	NUM	Q---------	NumForm=Digit	5	nsubj:pass	5:nsubj:pass	Vform=١٦|Translit=16
7	أن	أَنَّ	SCONJ	C---------	_	8	mark	8:mark	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
8	هم	هُوَ	PRON	SP---3MP4-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	Vform=هُم|Gloss=he,she,it|Translit=hum|LTranslit=huwa
9	في	فِي	ADP	P---------	AdpType=Prep	8	case	8:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
10	حال	حَال	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	8	obl	8:obl:gen	Vform=حَالٍ|Gloss=situation,condition,case|Root=.h_w_l|Translit=ḥālin|LTranslit=ḥāl
11	خطرة	خَطِر	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	amod	10:amod	SpaceAfter=No|Vform=خَطِرَةٍ|Gloss=serious,dangerous,critical|Root=_h_.t_r|Translit=ḫaṭiratin|LTranslit=ḫaṭir
12	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~



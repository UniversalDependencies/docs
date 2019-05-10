---
layout: base
title:  'Statistics of aux in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ar_padt-dep-aux-pass.html">aux:pass</a></tt>.

1593 nodes (1%) are attached to their parents as `aux`.

1578 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18518518518519.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (1453; 91% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (59; 4% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (49; 3% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (17; 1% instances), <tt><a href="ar_padt-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="ar_padt-pos-DET.html">DET</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="ar_padt-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	قد	قَد	AUX	F---------	_	3	aux	3:aux	Vform=قَد|Gloss=indeed,has_/_have,may_/_might|Root=qad|Translit=qad|LTranslit=qad
3	تحطمت	تَحَطَّم	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	1:parataxis	Vform=تَحَطَّمَت|Gloss=break,crash|Root=.h_.t_m|Translit=taḥaṭṭamat|LTranslit=taḥaṭṭam
4	الطائرة	طَائِرَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	3	nsubj	3:nsubj	Vform=اَلطَّائِرَةُ|Gloss=aircraft,airplane|Root=.t_y_r|Translit=aṭ-ṭāʾiratu|LTranslit=ṭāʾirat
5	و	وَ	CCONJ	C---------	_	4	cc	4:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
6	هي	هُوَ	PRON	SP---3FS1-	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	7:nsubj	Vform=هِيَ|Gloss=he,she,it|Translit=hiya|LTranslit=huwa
7	تصميم	تَصمِيم	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	4	xcomp	4:xcomp	Vform=تَصمِيمٌ|Gloss=plan,sketch,design|Root=.s_m_m|Translit=taṣmīmun|LTranslit=taṣmīm
8	قديم	قَدِيم	ADJ	A-----MS1I	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	7	amod	7:amod	Vform=قَدِيمٌ|Gloss=old,ancient|Root=q_d_m|Translit=qadīmun|LTranslit=qadīm
9	ل	لِ	ADP	P---------	AdpType=Prep	10	case	10:case	Vform=لِ|Gloss=for,to|Root=l|Translit=li|LTranslit=li
10	طراز	طِرَاز	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	7	nmod	7:nmod	Vform=طِرَازِ|Gloss=model,type,calibre|Root=.t_r_z|Translit=ṭirāzi|LTranslit=ṭirāz
11	"	"	PUNCT	G---------	_	12	punct	12:punct	SpaceAfter=No|Vform="|Translit="
12	سي	سِي	X	X---------	Foreign=Yes	10	nmod	10:nmod	SpaceAfter=No|Vform=سِي|Gloss=C.|Root=sI|Translit=sī|LTranslit=sī
13	.	.	PUNCT	G---------	_	12	punct	12:punct	SpaceAfter=No|Vform=.|Translit=.
14	ال	إِل	X	X---------	Foreign=Yes	10	nmod	10:nmod	SpaceAfter=No|Vform=إِل|Gloss=L.|Root='il|Translit=ʾil|LTranslit=ʾil
15	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	أ	أَ	AUX	F---------	_	4	aux	4:aux	Vform=أَ|Gloss=whether,indeed|Root='a|Translit=ʾa|LTranslit=ʾa
2	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	4	cop	4:cop	Vform=لَيسَ|Gloss=be_not,is_not|Root=l_y_s|Translit=laysa|LTranslit=lays
3	هذا	هٰذَا	DET	SD----MS1-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	Vform=هٰذَا|Gloss=this,these|Root=h|Translit=hāḏā|LTranslit=hāḏā
4	أفضل	أَفضَل	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	Vform=أَفضَلَ|Gloss=better_/_best|Root=f_.d_l|Translit=ʾafḍala|LTranslit=ʾafḍal
5	من	مِن	ADP	P---------	AdpType=Prep	7	mark	7:mark	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
6	أن	أَن	CCONJ	C---------	_	7	mark	7:mark	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
7	نزرع	زَرَع	VERB	VISA-1MP--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	4	advcl	4:advcl	Vform=نَزرَعَ|Gloss=plant,implant,cultivate|Root=z_r_`|Translit=nazraʿa|LTranslit=zaraʿ
8	القمح	قَمح	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	7	obj	7:obj	Vform=اَلقَمحَ|Gloss=wheat,grain|Root=q_m_.h|Translit=al-qamḥa|LTranslit=qamḥ
9	في	فِي	ADP	P---------	AdpType=Prep	10	case	10:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
10	رومانيا	رُومَانِيَا	X	X---------	Foreign=Yes	7	obl	7:obl	SpaceAfter=No|Vform=رُومَانِيَا|Gloss=Romania|Root=rUmAn|Translit=rūmāniyā|LTranslit=rūmāniyā
11	؟	؟	PUNCT	G---------	_	4	punct	4:punct	SpaceAfter=No|Vform=؟|Translit=?
12	!	!	PUNCT	G---------	_	4	punct	4:punct	Vform=!|Translit=!

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	يعتقد	اِعتَقَد	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	Vform=يَعتَقِدُ|Gloss=believe|Root=`_q_d|Translit=yaʿtaqidu|LTranslit=iʿtaqad
3	المحللون	مُحَلِّل	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	2	nsubj	2:nsubj	Vform=اَلمُحَلِّلُونَ|Gloss=analyst|Root=.h_l_l|Translit=al-muḥallilūna|LTranslit=muḥallil
4	ان	أَنَّ	CCONJ	C---------	_	9	mark	9:mark	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
5	التجارة	تِجَارَة	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	9	nsubj	9:nsubj	Vform=اَلتِّجَارَةَ|Gloss=commerce,business|Root=t_^g_r|Translit=at-tiǧārata|LTranslit=tiǧārat
6	س	سَ	AUX	F---------	_	9	aux	9:aux	Vform=سَ|Gloss=will|Root=sa|Translit=sa|LTranslit=sa
7	تكون	كَان	AUX	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	9	cop	9:cop	Vform=تَكُونُ|Gloss=be,is,exist|Root=k_w_n|Translit=takūnu|LTranslit=kān
8	من	مِن	ADP	P---------	AdpType=Prep	9	case	9:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
9	الاستراتيجيات	إِسترَاتِيجِيَّة	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	2	ccomp	2:ccomp	Vform=اَلإِسترَاتِيجِيَّاتِ|Gloss=strategy|Root='istrAtI^g|Translit=al-ʾistrātīǧīyāti|LTranslit=ʾistrātīǧīyat
10	الامريكية	أَمرِيكِيّ	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	amod	9:amod	Vform=اَلأَمرِيكِيَّةِ|Gloss=American|Root='amrIk|Translit=al-ʾamrīkīyati|LTranslit=ʾamrīkīy
11	ل	لِ	ADP	P---------	AdpType=Prep	12	case	12:case	Vform=لِ|Gloss=for,to|Root=l|Translit=li|LTranslit=li
12	التعامل	تَعَامُل	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	9	nmod	9:nmod	Vform=اَلتَّعَامُلِ|Gloss=relations,dealings|Root=`_m_l|Translit=at-taʿāmuli|LTranslit=taʿāmul
13	مع	مَعَ	ADP	PI------4-	AdpType=Prep|Case=Acc	14	case	14:case	Vform=مَعَ|Gloss=with|Root=ma`|Translit=maʿa|LTranslit=maʿa
14	منطقة	مِنطَقَة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	12	nmod	12:nmod	Vform=مِنطَقَةِ|Gloss=area,zone,territory|Root=n_.t_q|Translit=minṭaqati|LTranslit=minṭaqat
15	الشرق	شَرق	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	14	nmod	14:nmod	Vform=اَلشَّرقِ|Gloss=east,East,Orient|Root=^s_r_q|Translit=aš-šarqi|LTranslit=šarq
16	الاوسط	أَوسَط	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	amod	15:amod	SpaceAfter=No|Vform=اَلأَوسَطِ|Gloss=middle,central|Root=w_s_.t|Translit=al-ʾawsaṭi|LTranslit=ʾawsaṭ
17	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~



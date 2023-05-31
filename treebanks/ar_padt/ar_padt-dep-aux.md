---
layout: base
title:  'Statistics of aux in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ar_padt-dep-aux-pass.html">aux:pass</a></tt>.

1584 nodes (1%) are attached to their parents as `aux`.

1577 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17045454545455.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (1444; 91% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (58; 4% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (51; 3% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (17; 1% instances), <tt><a href="ar_padt-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="ar_padt-pos-DET.html">DET</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ar_padt-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


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
10	طراز	طِرَاز	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	7	nmod	7:nmod:لِ:gen	Vform=طِرَازِ|Gloss=model,type,calibre|Root=.t_r_z|Translit=ṭirāzi|LTranslit=ṭirāz
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
6	أن	أَن	SCONJ	C---------	_	7	mark	7:mark	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
7	نزرع	زَرَع	VERB	VISA-1MP--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	4	advcl	4:advcl:مِن_أَن	Vform=نَزرَعَ|Gloss=plant,implant,cultivate|Root=z_r_`|Translit=nazraʿa|LTranslit=zaraʿ
8	القمح	قَمح	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	7	obj	7:obj	Vform=اَلقَمحَ|Gloss=wheat,grain|Root=q_m_.h|Translit=al-qamḥa|LTranslit=qamḥ
9	في	فِي	ADP	P---------	AdpType=Prep	10	case	10:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
10	رومانيا	رُومَانِيَا	X	X---------	Foreign=Yes	7	obl	7:obl:فِي	SpaceAfter=No|Vform=رُومَانِيَا|Gloss=Romania|Root=rUmAn|Translit=rūmāniyā|LTranslit=rūmāniyā
11	؟	؟	PUNCT	G---------	_	4	punct	4:punct	SpaceAfter=No|Vform=؟|Translit=?
12	!	!	PUNCT	G---------	_	4	punct	4:punct	Vform=!|Translit=!

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux	color:blue
1	شيخ	شَيخ	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	0	root	0:root	Vform=شَيخُ|Gloss=sheikh,chieftain,senators|Root=^s_y__h|Translit=šayḫu|LTranslit=šayḫ
2	الأزهر	أَزهَر	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	1	nmod	1:nmod:gen	SpaceAfter=No|Vform=اَلأَزهَرِ|Gloss=Azhar|Root=z_h_r|Translit=al-ʾazhari|LTranslit=ʾazhar
3	:	:	PUNCT	G---------	_	2	punct	2:punct	Vform=:|Translit=:
4	"	"	PUNCT	G---------	_	6	punct	6:punct	SpaceAfter=No|Vform="|Translit="
5	من	مِن	ADP	P---------	AdpType=Prep	6	case	6:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
6	حق	حَقّ	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	1	parataxis	1:parataxis	Vform=حَقِّ|Gloss=truth,right,law|Root=.h_q_q|Translit=ḥaqqi|LTranslit=ḥaqq
7	فرنسا	فَرَنسَا	X	X---------	Foreign=Yes	6	nmod	6:nmod	Vform=فَرَنسَا|Gloss=France|Root=farans|Translit=faransā|LTranslit=faransā
8	منع	مَنع	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	6	nsubj	6:nsubj	Vform=مَنعُ|Gloss=prevention,interdiction|Root=m_n_`|Translit=manʿu|LTranslit=manʿ
9	الحجاب	حِجَاب	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	8	nmod	8:nmod:gen	Vform=اَلحِجَابِ|Gloss=veil|Root=.h_^g_b|Translit=al-ḥiǧābi|LTranslit=ḥiǧāb
10	و	وَ	CCONJ	C---------	_	13	cc	13:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
11	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	13	aux	13:aux	Vform=لَيسَ|Gloss=be_not,is_not|Root=l_y_s|Translit=laysa|LTranslit=lays
12	من	مِن	ADP	P---------	AdpType=Prep	13	case	13:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
13	حق	حَقّ	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	conj	1:parataxis|6:conj	Vform=حَقِّ|Gloss=truth,right,law|Root=.h_q_q|Translit=ḥaqqi|LTranslit=ḥaqq
14	أحد	أَحَد	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	13	nmod	13:nmod:gen	Vform=أَحَدٍ|Gloss=one,someone|Root='_.h_d|Translit=ʾaḥadin|LTranslit=ʾaḥad
15	التدخل	تَدَخُّل	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	13	nsubj	13:nsubj	Vform=اَلتَّدَخُّلُ|Gloss=intervention,interference|Root=d__h_l|Translit=at-tadaḫḫulu|LTranslit=tadaḫḫul
16	في	فِي	ADP	P---------	AdpType=Prep	17	case	17:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
17	شئون	شَأن	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	15	obl:arg	15:obl:arg:فِي:gen	Vform=شُؤُونِ|Gloss=matter,affair,concern,regard|Root=^s_'_n|Translit=šuʾūni|LTranslit=šaʾn
18	المسلمين	مُسلِم	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	17	nmod	17:nmod:gen	SpaceAfter=No|Vform=اَلمُسلِمِينَ|Gloss=Muslim|Root=s_l_m|Translit=al-muslimīna|LTranslit=muslim
19	"	"	PUNCT	G---------	_	6	punct	6:punct	Vform="|Translit="

~~~





--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal but the values `Aor`, `Prs` are language-specific.
It occurs with 4 different values: `Aor`, `Fut`, `Past`, `Prs`.

236 tokens (4%) have a non-empty value of `Tense`.
147 types (5%) occur at least once with a non-empty value of `Tense`.
95 lemmas (6%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [kk-pos/VERB]() (149; 2% instances), [kk-pos/AUX]() (87; 1% instances).

### `VERB`

149 [kk-pos/VERB]() tokens (14% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (104; 70%), <tt><a href="Number.html">Number</a>=Sing</tt> (95; 64%), <tt><a href="Person.html">Person</a>=3</tt> (78; 52%).

`VERB` tokens may have the following values of `Tense`:

* `Aor` (60; 40% of non-empty `Tense`): <em>болады, алам, біледі, жасалады, келмейді, үйретемін, _, айыптайды, араласпаймын, атасың</em>
* `Fut` (3; 2% of non-empty `Tense`): <em>барарсың, қайтарсың, өрерде</em>
* `Past` (86; 58% of non-empty `Tense`): <em>деді, келген, көрген, ашылды, деген, келді, көтерді, шықты, шыққан, қашқан</em>
* `EMPTY` (906): <em>_, деп, болып, алып, болған, болды, біледі, береді, басып, бастап</em>

<table>
  <tr><th>Paradigm <i>бар</i></th><th><tt>Fut</tt></th><th><tt>Past</tt></th><th><tt>Aor</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td></td><td></td><td><em>барамын</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td><em>барарсың</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><em>барған</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>бардық</em></td><td></td></tr>
</table>

### `AUX`

87 [kk-pos/AUX]() tokens (27% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (78; 90%), <tt><a href="Person.html">Person</a>=3</tt> (77; 89%).

`AUX` tokens may have the following values of `Tense`:

* `Aor` (53; 61% of non-empty `Tense`): <em>_, екен, келеді, емес, қалады, қалмайды, қоймайды</em>
* `Past` (29; 33% of non-empty `Tense`): <em>кетті, қалды, еді, жатқан, алмады, берді, жүрген, жүргенде, келді, келдім</em>
* `Prs` (5; 6% of non-empty `Tense`): <em>жатыр, жатырмын, жүрміз, отыр, тұрсыңдар</em>
* `EMPTY` (237): <em>_, бастады, жатыр, емес, алды, еді, екен, екенін, жүр, алмайды</em>

<table>
  <tr><th>Paradigm <i>е</i></th><th><tt>Past</tt></th><th><tt>Aor</tt></th></tr>
  <tr><td><tt><a href="Evidentiality.html">Evidentiality</a>=Fh|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><em>екен</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>еді</em></td><td><em>_</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td><em>емес</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>_</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td></td><td><em>_</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (18; 100%).


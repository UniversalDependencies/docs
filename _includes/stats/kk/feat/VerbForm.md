

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal but the values `Coverb` are language-specific.
It occurs with 4 different values: `Coverb`, `Ger`, `Part`, `Trans`.

168 tokens (3%) have a non-empty value of `VerbForm`.
134 types (5%) occur at least once with a non-empty value of `VerbForm`.
88 lemmas (5%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: [kk-pos/VERB]() (158; 3% instances), [kk-pos/AUX]() (10; 0% instances).

### `VERB`

158 [kk-pos/VERB]() tokens (15% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (143; 91%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (143; 91%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (113; 72%).

`VERB` tokens may have the following values of `VerbForm`:

* `Coverb` (44; 28% of non-empty `VerbForm`): <em>алып, болып, келе, Келіп, Тарағысы, Шошып, абыржып, азайып, ала, алыса</em>
* `Ger` (34; 22% of non-empty `VerbForm`): <em>_, алуды, алқалаған, асқанда, атауға, ашқанда, басталғаннан, батқанда, бағынуы, болған</em>
* `Part` (31; 20% of non-empty `VerbForm`): <em>деген, келген, қашқан, айтқан, алдырған, асыратын, атқарушы, білетін, бітірген, бұйырған</em>
* `Trans` (49; 31% of non-empty `VerbForm`): <em>деп, болмаса, алып, атып, берсе, беріп, болса, қашып, өлгенше, айтып</em>
* `EMPTY` (897): <em>_, деп, болып, біледі, болды, болған, береді, болады, бастап, басып</em>

<table>
  <tr><th>Paradigm <i>де</i></th><th><tt>Part</tt></th><th><tt>Trans</tt></th><th><tt>Ger</tt></th><th><tt>Coverb</tt></th></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf</tt></td><td></td><td><em>деп</em></td><td></td><td><em>деп</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td></td><td><em>дегенде</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cond|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>десең</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>деген, дегендей</em></td><td></td><td></td><td></td></tr>
</table>

### `AUX`

10 [kk-pos/AUX]() tokens (3% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (10; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (10; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (6; 60%).

`AUX` tokens may have the following values of `VerbForm`:

* `Coverb` (2; 20% of non-empty `VerbForm`): <em>ала, бара</em>
* `Ger` (1; 10% of non-empty `VerbForm`): <em>жүргенде</em>
* `Part` (3; 30% of non-empty `VerbForm`): <em>жатқан, отырған</em>
* `Trans` (4; 40% of non-empty `VerbForm`): <em>беріп, жіберіп, жүріп, сала</em>
* `EMPTY` (314): <em>_, бастады, жатыр, екен, кетті, еді, емес, қалды, алды, екенін</em>

<table>
  <tr><th>Paradigm <i>жүр</i></th><th><tt>Trans</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf</tt></td><td><em>жүріп</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td><em>жүргенде</em></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (11; 92%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (1; 100%).


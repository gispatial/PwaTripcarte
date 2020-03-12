<template>
  <vx-card title="COMPANY INFORMATION" code-toggler>

    <!-- TITLE -->
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Company Name *</span>
        </div>
      </template>
      <vs-input v-model="title" placeholder="Your SSM company name" />
    </vx-input-group>

    &nbsp;
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Sir/ Madam</span>
        </div>
      </template>
      <vs-input v-model="title" placeholder="Contact Person Name *" />
    </vx-input-group>

    &nbsp;
    <vx-input-group class="mb-base">
      <vs-input v-model="number" placeholder="Phone Number *" />

    </vx-input-group>
    <!-- /URL -->

    <!-- USERNAME -->

    <p>Website:</p>
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>http://</span>
        </div>

      </template>

      <vs-input v-model="siteUsername" />
    </vx-input-group>
    <!-- /USERNAME -->

    <!-- currency -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Email</span>
        </div>
      </template>

      <vs-input v-model="email" />

      <template slot="append">
      </template>
    </vx-input-group>
    <!-- /currency -->

    <!-- Textarea -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Address</span>
        </div>
      </template>

      <vs-input v-model="address" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Apartment, Suite, unit etc. (optional)</span>
        </div>
      </template>

      <vs-input v-model="apt, suite" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Address</span>
        </div>
      </template>

      <vs-input v-model="address" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Apartment, Suite, unit etc. (optional)</span>
        </div>
      </template>

      <vs-input v-model="apt, suite" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>City</span>
        </div>
      </template>

      <vs-input v-model="address" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>State/Province</span>
        </div>
      </template>

      <vs-input v-model="apt, suite" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Zip/Postal</span>
        </div>
      </template>

      <vs-input v-model="address" />

      <template slot="append">
      </template>
    </vx-input-group>

    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Country</span>
        </div>
      </template>

      <vs-input v-model="apt" />

      <template slot="append">
      </template>
    </vx-input-group>

    <template slot="codeContainer">
&lt;tempalte&gt;
  &lt;!-- TITLE --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;@&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;title&quot; placeholder=&quot;Email&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /TITLE --&gt;

  &lt;!-- URL --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;vs-input v-model=&quot;username&quot; placeholder=&quot;Username&quot; /&gt;

    &lt;template slot=&quot;append&quot;&gt;
      &lt;div class=&quot;append-text bg-primary&quot;&gt;
        &lt;span&gt;@url.com&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /URL --&gt;

  &lt;!-- USERNAME --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;https://pixinvent.com/users/&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;siteUsername&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /USERNAME --&gt;

  &lt;!-- currency --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;$&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;amount&quot; /&gt;

    &lt;template slot=&quot;append&quot;&gt;
      &lt;div class=&quot;append-text bg-primary&quot;&gt;
        &lt;span&gt;.00&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /currency --&gt;

  &lt;!-- Textarea --&gt;
  &lt;vx-input-group&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;Description&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-textarea v-model=&quot;textarea&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /Textarea --&gt;
&lt;/tempalte&gt;

&lt;script&gt;
export default {
  data() {
    return {
      title: &apos;&apos;,
      username: &apos;&apos;,
      siteUsername: &apos;&apos;,
      amount: &apos;&apos;,
      textarea: &apos;&apos;,
    }
  }
}
&lt;/script&gt;
    </template>

  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      username: '',
      siteUsername: '',
      amount: '',
      textarea: '',
    }
  }
}
</script>

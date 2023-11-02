import React from "react";

export default function FeatureIndex2({ feature }) {
  return (
    <div>
      <section class="bg-dark custom-pb-1">
        <div class="container">
          <div class="row">
            {feature.map((feature, index) => (
              <div key={index} class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                <div class="d-flex">
                  <div class="mr-2">
                    <i class={feature.icon + " ic-2x text-primary"}></i>
                  </div>
                  <div>
                    <h5 class="mb-1 text-white">{feature.title}</h5>
                    <p class="mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

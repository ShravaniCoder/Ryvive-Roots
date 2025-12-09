const StepPlanOptions = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">10 Day Detox Cut Diet</h2>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="plan"
          value="3 Day Trial"
          checked={formData.plan === "3 Day Trial"}
          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
        />
        3 Day Trial
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="plan"
          value="10 Day Detox"
          checked={formData.plan === "10 Day Detox"}
          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
        />
        10 Day Detox
      </label>
    </div>
  );
};

export default StepPlanOptions;
